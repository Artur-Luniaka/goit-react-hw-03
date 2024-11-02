import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
