function Card(props) {
  return (
    <>
      <div
        className="fontCard"
        style={{
          fontFamily: `"${props.fontFamily}"`,
          fontSize: props.fontsize,
        }}
      >
        {props.text}
      </div>
    </>
  );
}

export default Card;
