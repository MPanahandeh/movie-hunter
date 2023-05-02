import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppContext } from "../../context/app.context";
import { SetActiveQuery, ClearActiveQuery } from "../../context/dispatchers";
import "./Search.css";


const Search = ( ) => {
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const {activeQuery}  = useAppContext()
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
  void dispatch({
    dispatcher: SetActiveQuery,
    payload: e.target.value,
  })

const handleClear = () =>
  void dispatch({
    dispatcher: ClearActiveQuery,
  })

  useEffect(() => {
    ref.current?.focus();
  }, [])

  return (
    <div className="input-wrapper">
      <input
        ref ={ref}
        className="search"
        placeholder="Search..."
        value= {activeQuery}
        onChange={handleSearch}
      />
      { activeQuery !== '' && <button className="clear" onClick={handleClear} >&#x2716;</button>}
    </div>
  );
};

export default Search;
