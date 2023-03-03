function Card(props) {
  return (
    <>
      <div className={`card`}>
        <div className="heading-container">
          <div className="heading">{props.heading}</div>
          <div className="price">{props.price}</div>
        </div>
        <hr />
        <div className="desc">{props.desc}</div>
      </div>
    </>
  );
}

export default Card;
