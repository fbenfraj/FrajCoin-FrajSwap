const ActionForm = ({ actionName, actionMethod }) => {
  return (
    <form onSubmit={actionMethod}>
      <input />
      <button>{actionName}</button>
    </form>
  );
};

export default ActionForm;
