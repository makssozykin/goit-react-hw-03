export const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
