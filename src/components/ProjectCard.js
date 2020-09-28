import React from "react";
import "./Style.css";

export default function ProjectCard(props) {
  const { img, deployed, title, description, repo } = props;

  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="page screenshot"></img>
      <div className="card-body">
        <h5 className="card-title">
          <a href={deployed}>{title}</a>
        </h5>
        <p className="card-text">{description}</p>
        <a href={repo} className="btn btn-primary">
          Github Repository
        </a>
      </div>
    </div>
  );
}
