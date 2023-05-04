import React from "react";
import { closeSearch } from "@/utils/animations";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SearchBar = ({ inputRef, bgModalRef }) => {
  const navigate = useNavigate();

  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchRef = document.querySelector("#searchRef");

    navigate(`/search/${searchRef.value}`);
    searchRef.value = "";
    closeSearch(inputRef.current, bgModalRef.current)
  }

  return (
    <>
      <form
        ref={inputRef}
        action=''
        onSubmit={handleSubmitSearch}
        className='opacity-0 absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none'
      >
        <input
          className='pointer-events-none px-[15px] py-[10px] w-[300px] md:w-[400px] text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus:bg-[#90867d] focus-visible:outline-none transition-all placeholder:text-[#222421]/80'
          type='text'
          name=''
          placeholder='Black hoodie...'
          id='searchRef'
        />
      </form>
      <span
        ref={bgModalRef}
        onClick={() => closeSearch(inputRef.current, bgModalRef.current)}
        className='opacity-0 absolute w-full h-full bg-[#22242180] pointer-events-none z-[9]'
      ></span>
    </>
  );
};

export default SearchBar;
