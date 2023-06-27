import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addpost, deltepost } from "../redux/UserRedux";
import {NavLink} from "react-router-dom"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
  } from "mdb-react-ui-kit";
  
function Posts() {
  const [name, setname] = useState("");
  const [text, settext] = useState("");
  const userpost = useSelector((state) => state.user.post);
  const dispatch = useDispatch();
  const history = useHistory();
  function handlename(e) {
    setname(e.target.value);
  }
  function handletext(e) {
    settext(e.target.value);
  }
  function handlesubmit(e) {
    console.log(name, text);
    e.preventDefault();
    if (name.length && text.length) {
      dispatch(addpost({ name, text }));
      setname("")
      settext("");
    }
  }
  function handleDelete(userid){
    dispatch(deltepost(userid))
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <MDBInput
          className="mb-4"
          id="form5Example1"
          label="Name"
          type=""
          value={name}
          onChange={handlename}
        />
        <textarea rows={4} cols={50} onChange={handletext} value={text}></textarea>
        <MDBBtn type="submit" block>
          Submit
        </MDBBtn>
      </form>

      <div
        style={{ display: "flex", justifyContent: "start", flexWrap: "wrap" }}
      >
        {userpost &&
          userpost.map((user, id) => {
            return (
              <div>
                <MDBCard style={{ maxWidth: "540px" }}>
                  <MDBRow className="g-0">
                    <MDBCol md="4">
                      <MDBCardImage
                        src="data:image/png;base64,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"
                        alt="..."
                        fluid
                      />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody>
                        <MDBCardTitle>User Info</MDBCardTitle>
                        <MDBCardText>
                          <small className="text-muted">{user.name}</small>
                        </MDBCardText>
                        <MDBCardText>
                          <small className="text-muted">
                            {user.text}
                          </small>
                        </MDBCardText>
                        <MDBCardText>
                          <small className="text-muted">
                            {user.phonenumber}
                          </small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                <MDBBtn
                  className="me-1"
                  color="danger"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </MDBBtn>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Posts;
