import React from "react";

const Filters = () => {
  return (
    <>
      <div
        ref={filtersRef}
        className='fixed bottom-[8vh] opacity-0 w-[400px] h-[200px] bg-[#9F948B] border-2 border-[#222421]'
      ></div>
      <div className='fixed bottom-[1vh] w-[400px] flex gap-2 p-2 bg-[#9F948B] h-[55px] border-2 border-[#222421]'>
        <button
          onClick={() => {
            toggleFilters(filtersRef.current, isOpenFilters);
            setIsOpenFilters(!isOpenFilters);
          }}
          className='flex items-center justify-center w-full h-full bg-[#222421] text-[#9F948B] hover:bg-[#30322e] transition-colors active:bg-[#383a36]'
        >
          COLOR
        </button>
        <button className='flex items-center justify-center w-full h-full bg-[#222421] text-[#9F948B] hover:bg-[#30322e] transition-colors active:bg-[#383a36]'>
          SIZE
        </button>
        <button className='flex items-center justify-center w-full h-full bg-[#222421] text-[#9F948B]'>
          PRICE
        </button>
      </div>
    </>
  );
};

export default Filters;
