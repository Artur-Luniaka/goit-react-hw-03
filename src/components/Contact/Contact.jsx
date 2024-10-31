import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={s.button}>Delete</button>
    </>
  );
};

export default Contact;
