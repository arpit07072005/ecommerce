import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const api = "https://dummyjson.com/users";


const Loginpage = () => {
  const navigate = useNavigate(); 
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");
const [users, setUsers] = useState([]);
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  
  fetchUsers();
}, []);
const pass=(event)=>{
  setPassword(event.target.value);
}
const em=(event)=>{
  setEmail(event.target.value);
}
const al=(event)=>{
      event.preventDefault()
      const user = users.find((user) => user.email === email);
      if (user) { 
        if (user.password === password) {
          alert("Sucessfully login");
          navigate("/Home");
        } else {
          alert("Incorrect Password");
        }
      } else {
        alert("User Not Found");
      }
    }
    return (
      <div className="cartimgcont">
      <div className="logincontainer">
      <h2>Login</h2>
      <form  className="form" onSubmit={al}>
        <div className="group">
          <label  className="label">Email</label>
          <input
            type="email" value={email} placeholder=" Enter your details" onChange={em} className="input"/>
        </div>
        <div className="group">
          <label  className="label">Password</label>
          <input
            type="password" value={password} placeholder=" Enter your password" onChange={pass} className="input"/>
        </div>
        <button className="loginbutton">Login</button>
        <p>Don't have an account? <a href="/signup"> Sign Up</a></p>
      </form>
    </div>
    <div className="cartimg">
      <img src="Red-Shopping-Cart-PNG-Photo.png" alt="" />
    </div>
    </div>
  );
};
export default Loginpage;
