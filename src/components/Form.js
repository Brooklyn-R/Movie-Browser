import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Form submitted, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
