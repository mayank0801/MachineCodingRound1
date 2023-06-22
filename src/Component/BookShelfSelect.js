import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { FaCheck } from "react-icons/fa";

export default function BookShelfSelect({ book }) {
  const {
    state: { category },
    dispatch
  } = useContext(DataContext);

  // console.log(book);
  return (
    <div className="Bookshelf-Container">
      {category.map((categoryTitle) => (
        <div
          className="bookShlef-catyegory"
          onClick={() => {
            console.log(book._id, "bookid");
            dispatch({
              type: "Update_Book",
              payload: { bookId: book._id, categoryToMove: categoryTitle }
            });
          }}
          key={categoryTitle}
        >
          <span style={{ padding: "2px" }}>
            {book.category === categoryTitle && <FaCheck />}
          </span>
          {categoryTitle}
        </div>
      ))}
    </div>
  );
}
