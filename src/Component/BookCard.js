import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import BookShelfSelect from "./BookShelfSelect";

export default function BookCard({ book }) {
  const { _id, img, title, author, category } = book;
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="bookCard">
      <div>
        <img src={img} height="300px" width="100%" alt={`${title}logo`} />
      </div>
      <h4>{title}</h4>
      <p>{author}</p>
      <IoMdArrowDropdownCircle
        className="card-icon"
        size={40}
        color={"green"}
        onClick={() => setOpen(!isOpen)}
      />
      {isOpen && (
        <div className="card-icon2">
          <BookShelfSelect book={book} />
        </div>
      )}
    </div>
  );
}
