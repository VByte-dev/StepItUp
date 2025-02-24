import React, { useState } from "react";

let Card = (props) => {
  let { data } = props;
  let [hide, setHide] = useState("block");
  return (
    <>
      <div
        className={`bg-white ${hide} text-black m-3 rounded p-4 pFont font-bold active:bg-amber-400 cursor-pointer `}
      >
        <h1 onClick={() => setHide("hidden")}>{data}</h1>
      </div>
    </>
  );
};

export default Card;
