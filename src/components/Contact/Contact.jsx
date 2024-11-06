export const Contact = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </li>
  );
};
