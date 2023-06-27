import "../Register/Register.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../redux/UserRedux";
function Register() {
  const [emailaddress, setemailaddress] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState({});
  const [passworderror, setpassworderror] = useState({});
  const history = useHistory();
  const dispatch = useDispatch()
  function handleemail(e) {
    setemailaddress(e.target.value);
  }
  function handlepassword(e) {
    setpassword(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        emailaddress,
        password,
      });
      dispatch(addUser("register"))
      history.push("/login")
    } catch (error) {
      console.error(error.response.data);
    }
  }
  return (
    <>
      <div className="full-container">
        <div className="login">REGISTER</div>
        <form onSubmit={handleSubmit}>
          <div className="input-email">
            <input
              className="input-email-name"
              type="text"
              placeholder="Email"
              onChange={handleemail}
              value={emailaddress}
            />
          </div>
          <div className="input-password">
            <input
              className="input-password-name"
              type="password"
              placeholder="Password"
              onChange={handlepassword}
              value={password}
            />
          </div>
          <button className="subbuttn" type="submit">
            submit
          </button>
        </form>
        <div className="create-new-account">Already Registered</div>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <div className="register-button">Login</div>
        </NavLink>
      </div>
    </>
  );
}
export default Register;
