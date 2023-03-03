import React from "react";

function Paragraph(props) {
  return (
    <>
      <div className={`paragraph ${props.class}`}>{props.text}</div>
    </>
  );
}

export default Paragraph;
