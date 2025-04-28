import React from "react";

function Notif({ text, children, bg }) {
  return (
    <div
      className={`w-[300px]  h-fit p-6 ${bg}  rounded-lg fixed md:top-35 md:right-43 top-28 right-5 flex items-center gap-4 z-10`}
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
