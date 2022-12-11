import React from "react";
import loader from "../assests/loader.gif";

const Spinner = ({ loading }) => {
  return (
    <div
      className={`z-50 w-full h-screen flex justify-center items-center fixed t-0 l-0`}
    >
      <div class="loadingio-spinner-pulse-x9mnhbpby0p">
        <div class="ldio-9vgzudbxn8h">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
