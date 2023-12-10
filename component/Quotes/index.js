import React from "react";

const Qoutes = ({ text, position }) => {
  return <div className={`absolute ${position}`}>"{text}"</div>;
};

export default Qoutes;
