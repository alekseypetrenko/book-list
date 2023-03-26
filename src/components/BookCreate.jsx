import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleClick}>
        <label htmlFor="">Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
