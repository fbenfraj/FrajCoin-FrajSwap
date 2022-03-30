import React, { useState } from "react";
import "./ActionForm.css";

const ActionForm = ({ actionName, actionMethod, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h2>{actionName}</h2>
      <hr />
      <form
        onSubmit={(e) => actionMethod(e, value)}
        className={actionName === "buy" ? "buy" : "sell"}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        <button>{actionName}</button>
      </form>
    </div>
  );
};

export default ActionForm;
