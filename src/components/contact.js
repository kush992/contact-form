import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [sentData, setSentData] = useState("");

  const handleSubmit = (e) => {
    setSentData("name: " + name + " | email:  " + email + " | content:  " + content)
    alert("Thank you for submitting form. name: " + name + " | email:  " + email + " | content:  " + content );
    e.preventDefault();

    setName("");
    setEmail("");
    setContent("");
  };

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const genRegex = /\d/;

  const isEmailValid = email && email.length > 2 && emailRegex.test(email);
  const isNameValid = name && name.length > 1 && genRegex.test(name);
  const isSubmitDisable = isNameValid || !isEmailValid || name === "" || email === "" || content === "" || content.length > 120;

  const count = content.length;

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <h2>We are always happy to find out what's on your mind</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${isNameValid && "error-boundary"}`}
          required
          autoFocus
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${isEmailValid === false && "error-boundary"} text-transform__normal`}
          required
        />
        <textarea
          type="textarea"
          placeholder="Message Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={120}
          required
        />
        <p>{120-count}/120 characters left</p>
        <button
          type="submit"
          disabled={isSubmitDisable}
          className={`${isSubmitDisable ? "cursor__not-allowed" : ""}`}
        >
          Submit
        </button>
      </form>
      
      {/* below line is to print the form data on the page afte submitting it. It was just for testing purpose. */}
      {/* <p>{sentData}</p> */}
    </div>
  );
};

export default Contact;
