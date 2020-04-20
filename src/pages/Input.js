import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState([]);

  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("value", value);
    if (!value) return alert("please insert text!");
    const newInput = [...input, { text: value, jumlah: count }];
    console.log("newInput", newInput);
    setInput(newInput);
    setValue("");
  };
  return (
    <div>
      <h1 className="mt-5">Counter</h1>
      <form onSubmit={handleAdd}>
        <input type="text" value={value} onChange={handleChange} />
        <button className="mx-2 px-4" type="submit">
          Add
        </button>
      </form>
      <br />
      <button onClick={handlePlus}> + </button> {count}{" "}
      <button onClick={handleMinus}> - </button>
      {input.map((item, index) => (
        <li key={index}>
          {("nama", item.text)} {("jumlah", item.jumlah)}
        </li>
      ))}
    </div>
  );
};

export default Input;
