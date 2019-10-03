import React from "react";
import { Link } from "react-router-dom";

const Banner = ({
  color,
  image,
  title,
  subtitle,
  home,
  poster,
  courseBanner,
  especialidad,
  info
}) => {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className="ed-grid">
        <div>
          <img className="main-banner__img" src={image.src} alt={image.alt} />

          {home ? (
            <div className="ed-grid m-grid-2">
              <div className="main-banner__data l-block">
                <h1 className="main-banner__title">{title}</h1>
                <p>{subtitle}</p>
                <Link to="/cursos" className="button ghost accent-color">
                  Aprende ahora
                </Link>
              </div>
              <div className="img-container s-radius s-ratio-16-9">
                <img src={poster} alt="Curso Actual" />
              </div>
            </div>
          ) : courseBanner ? (
            <div className="ed-grid m-grid-3">
              <div className="main-banner__data m-cols-2 l-block">
                <h1 className="main-banner__title s-mb-0">{title}</h1>
                <p className="s-opacity-6">{subtitle}</p>
                <p>{info}</p>
                {especialidad && (
                  <p>
                    Este curso forma parte de la especialidad{" "}
                    <Link to="/especialidades">{especialidad}</Link>{" "}
                  </p>
                )}
              </div>
              <div className="img-container s-ratio-16-9 m-cols-1">
                <img src={poster} alt="Curso Actual" />
              </div>
            </div>
          ) : (
            <div className="main-banner__data s-center">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subtitle}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
