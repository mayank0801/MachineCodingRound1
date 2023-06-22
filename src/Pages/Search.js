import { useContext } from "react";
import BookCard from "../Component/BookCard";
import { DataContext } from "../context/dataContext";

export default function Search() {
  const {
    state: { books, searchText }
  } = useContext(DataContext);

  const filterdata = books.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="booksContainer">
      {filterdata.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}
