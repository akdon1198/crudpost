import "../Login/Login.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { addUser } from "../redux/UserRedux";
import {useDispatch} from "react-redux"
function Login() {
  const [emailaddress, setemailaddress] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState({});
  const [passworderror, setpassworderror] = useState({});
  const history = useHistory();
  const dispatch = useDispatch()
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { emailaddress, password });
      dispatch(addUser("login"))
      history.push("/posts")
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  function handlepassword(e) {
    setpassword(e.target.value);
  }
  function handleemail(e) {
    setemailaddress(e.target.value);
  }
  return (
    <>
      <div className="full-container">
        <div className="login">LOGIN</div>
        <form onSubmit={handleSubmit}>
          <div className="input-email">
            <input
              style={{ emailerror }}
              className="input-email-name"
              type="text"
              placeholder="Email"
              value={emailaddress}
              onChange={handleemail}
            />
          </div>
          <div className="input-password">
            <input
              style={{ passworderror }}
              className="input-password-name"
              type="text"
              placeholder="Password"
              value={password}
              onChange={handlepassword}
            />
          </div>
          <button className="subbuttn" type="submit">
            submit
          </button>
        </form>
        <div className="create-new-account">Create New Account</div>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <div className="register-button">Register</div>
        </NavLink>
      </div>
    </>
  );
}
export default Login;