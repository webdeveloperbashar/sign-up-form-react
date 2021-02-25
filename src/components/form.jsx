import React, { useState } from "react";
import classes from "../components/form.module.css";
export default function Form() {
  return (
    <div className={classes.form}>
      <h2 className="text-uppercase text-center mb-3">Sign up form</h2>
      <hr />
      <SignUp />
    </div>
  );
}

function SignUp() {
  const [input, setInput] = useState({ name: "", email: "", number: "" });
  const handleChange = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [name, setName] = useState({})  
  const HandleClick = () => {
    setName(input)
  };
  return (
    <>
      <Input
        type="text"
        placeholder="Enter your name"
        className="form-control"
        name="name"
        onchange={handleChange}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        className="form-control"
        name="email"
        onchange={handleChange}
      />
      <Input
        type="number"
        placeholder="Enter your phone"
        className="form-control"
        name="number"
        onchange={handleChange}
      />
      <Input
        type="button"
        value="ENTER"
        className="form-control btn btn-primary"
        name="number"
        onclick={HandleClick}
      />
      {
        <>
        {name.name && <h5>Name: {name.name}</h5>}
        {name.email && <h5>Email: {name.email}</h5>}
        {name.number && <h5>Number: {name.number}</h5>}
        </>
      }
    </>
  );
}
function Input(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        name={props.name}
        onChange={props.onchange}
        onClick={props.onclick}
      />
      <br />
    </>
  );
}