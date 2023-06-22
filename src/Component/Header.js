import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";
export default function Header() {
  // const location = useLocation();
  const navigate = useNavigate();
  const {
    state: { searchText },
    dispatch
  } = useContext(DataContext);
  // console.log(searchText);
  // const navigate=useNavigate();

  useEffect(() => {
    if (searchText.length > 0) navigate("/search");
    else navigate("/");
  }, [searchText]);

  return (
    <div className="Conatiner-center">
      <h1 style={{ textAlign: "center" }}>Book Shelf</h1>
      <IoMdArrowRoundBack onClick={() => navigate("/")} />
      <input
        type="search"
        value={searchText}
        placeholder="search books"
        onChange={(e) =>
          dispatch({ type: "SET_SEARCHVALUE", payload: e.target.value })
        }
      />
    </div>
  );
}
