import s from "./SearchBox.module.css";
const SearchBox = ({ onChange }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input className={s.input} type="text" onChange={onChange} />
    </>
  );
};

export default SearchBox;
