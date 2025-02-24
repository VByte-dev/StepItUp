import React, { useState } from "react";

let Card = (props) => {
  let { data } = props;
  let [comp, setComp] = useState(false);
  return (
    <>
      <div
        className={`bg-white ${comp?'line-through':''} text-black m-3 rounded p-4 pFont font-bold active:bg-green-600 cursor-pointer ${comp?'border-2 border-zinc-300 opacity-50':'border-0'} ease-in-out`}
        onClick={() => setComp(()=>!comp)}
      >
        <h1>{data}</h1>
      </div>
    </>
  );
};

export default Card;
