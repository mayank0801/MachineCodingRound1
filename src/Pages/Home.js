import { useContext } from "react";
import BookCard from "../Component/BookCard";
import { DataContext } from "../context/dataContext";

export default function Home() {
  const {
    state: { books, category }
  } = useContext(DataContext);
  // const output = books.filter(({ category }) => category === category[0]);
  // console.log(output);
  // console.log("Hii");
  // console.log(books.filter(({ category }) => category === "Currently Reading"));

  return (
    <div className="Conatiner-center">
      {category.map((categoryTitle) => (
        <div key={categoryTitle}>
          <h1 className="categoryTitle">{categoryTitle}</h1>
          <div className="booksContainer" style={{ flexWrap: "wrap" }}>
            {books
              .filter(({ category }) => category === categoryTitle)
              .map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
