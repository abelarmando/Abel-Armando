import React from "react";

function Notif({ text, children, bg }) {
  return (
    <div
      className={`w-[300px] h-fit p-6 ${bg}  rounded-lg fixed top-3 right-10 flex items-center gap-4`}
    >
      <div>{children}</div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
// sukses bg-green-500/80
export default Notif;
