function Movie(props) {
  return (
    <>
      <div className="movie" style={{ background: `url(" ${props.poster} ")` }}>
        <span className="movie-about">{props.title}</span>
        <span className="movie-date">{props.released}</span>
      </div>
    </>
  );
}

export default Movie;
