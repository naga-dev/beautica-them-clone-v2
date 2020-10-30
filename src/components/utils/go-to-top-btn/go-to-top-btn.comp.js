import React from "react";
import { FaChevronUp } from "react-icons/fa";

const GoToTopBtn = () => {
  const goToUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const style = {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    background: "#fff",
    padding: "10px",
    fontSize: "30px",
    lineHeight: "30px",
    border: "1px solid #ddd",
    cursor: "pointer",
    color: "#999",
    zIndex: "9998",
  };

  return (
    <div className="go-top-top" style={style} onClick={() => goToUp()}>
      <FaChevronUp />
    </div>
  );
};

export default GoToTopBtn;
