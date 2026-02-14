import React from "react";

const Tag = ({ status}) => {
  const statusStyles = {
    unconfirmed: "bg-blue-300 text-blue-800",
    "checked-in": "bg-green-300 text-green-800",
    "checked-out": "bg-gray-200 text-gray-800",
  };

  return (
    <span
      className={`uppercase  text-[9px] h-fit w-fit py-0.5 px-2 rounded-full ${
        statusStyles[status] || statusStyles["checked-out"]
      }`}
    >
      {status.replace("-", " ")}
    </span>
  );
};

export default Tag;
