import React from "react";
import { connect } from "react-redux";
import { handleAdd } from "../../Action/InputAction";

const List = (props) => {
  // console.log("props", props);
  return (
    <div>
      <h1>List Barang</h1>
      <li>{handleAdd}</li>
    </div>
  );
};

export default connect(List);
