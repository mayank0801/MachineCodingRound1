import { createContext, useReducer } from "react";
import { books, category } from "../Data/data";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "Update_Book": {
        console.log(action.payload);
        return {
          ...state,
          books: state.books.map((book) =>
            book._id === action.payload.bookId
              ? { ...book, category: action.payload.categoryToMove }
              : { ...book }
          )
        };
      }
      case "SET_SEARCHVALUE": {
        console.log(action.payload.value);
        return { ...state, searchText: action.payload };
      }
      default:
        return { ...state };
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    books: books,
    category: category,
    searchText: ""
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
