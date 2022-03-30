import React, { useState } from "react";

const ActionForm = ({ actionName, actionMethod, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <form onSubmit={(e) => actionMethod(e, value)}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <button>{actionName}</button>
    </form>
  );
};

export default ActionForm;
