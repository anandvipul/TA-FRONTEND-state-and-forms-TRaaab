import Paragraph from "../Paragraph/Paragraph";

function Card(props) {
  return (
    <>
      <div className={`card ${props.class}`}>
        <div className={`heading ${props.class ? "selected" : ""}`}>
          {props.head}
        </div>
        <Paragraph
          text={props.text}
          class={props.class ? "selected" : "hide"}
        />
      </div>
    </>
  );
}

export default Card;
