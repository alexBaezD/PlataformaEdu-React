import React from "react";
import { Link } from "react-router-dom";

const Card = ({ nombre, picture, cardid, path, course_type, homeCard }) => {
  return (
    <article className="card s-radius">
      {homeCard ? (
        <div className="img-container s-ratio-16-9 s-radius">
          <Link to={`/${path}/${cardid}`}>
            <img className="s-shadow" src={picture} alt={nombre} />
          </Link>
        </div>
      ) : (
        <>
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/${path}/${cardid}`}>
              <img className="s-shadow" src={picture} alt={nombre} />
            </Link>
          </div>
          <div className="card__data s-border s-pxy-2 img-percentage s-radius-br s-radius-bl">
            <h3 className="t5 s-mb-1 s-center">
              <Link to={`/${path}/${cardid}`}>{nombre}</Link>
            </h3>
            {course_type && <div></div>}
          </div>
        </>
      )}
    </article>
  );
};

export default Card;
