import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Style.css";

function Main() {
  return (
    <main className="container containerColor">
      <div className="row">
        <section className="row col-xs-12 col-sm-11 col-md-11 col-lg-11">
          <section className="col-xs-12 col-md-4 float-left">
            <h1>About Me</h1>
          </section>
          <section className="col-12">
            <hr />
          </section>
          <section className="profile-img col-xs-12">
            <img
              className="img-fluid rounded-circle col-xs-12 col-md-4 float-left margin-top"
              src="https://proflonghair07.github.io/resume/Murphy.jfif"
              alt="Murphy Profile"
            />
            <p className="margin-top col-xs-12 col-lg-12" id="brand-statement">
              My name is Murphy Vaughn and I am a full stack web developer with
              skills in html, css, and javascript. I also am familiar with
              aspects of the backend. I have experience with node.js, express,
              mysql databases, and MongoDb. My work background has been
              primarily in kitchens for the past ten years. I started as a line
              cook and worked my way up to being an executive chef at a fine
              dining restaurant. I believe the skills I learned in this field
              will translate nicely to web development. I learned to perform
              well under stress, multitask, and prioritize tasks. My time in
              restaurants has also left me with a very strong work ethic and no
              aversion to putting in extra hours when necessary either on or off
              the clock. This year I attended a full stack web design course at
              Vanderbilt University and have learned a lot in a short period of
              time. I have found that I am most interested in the front end and
              more specifically the design aspects of web development, but am
              also very interested in the back end as well. I desire to secure a
              full-time job as a junior developer and jump in headfirst. I enjoy
              a challenge and am well equipped to adapt when necessary.
            </p>
            <br />
            <div className="card contact text-center float-right">
              <h2 className="card-title">
                Contact Information
                <br />
                <div className="business-card-hr">
                  <span className="outer-line"></span>
                  <span
                    className="fa fa-address-card"
                    aria-hidden="true"
                  ></span>
                  <span className="outer-line"></span>
                </div>
              </h2>
              <span>
                <a href="https://github.com/proflonghair07" target="_blank">
                  <button type="button" className="btn btn-light mx-2">
                    <i className="fa fa-github" aria-hidden="true"></i> GitHub
                  </button>
                </a>
                <a
                  href="https://linkedin.com/in/murphy-vaughn-a256881a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-light mx-3">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    LinkedIn
                  </button>
                </a>
                <a href="mailto: vaughnmurphy89@gmail.com">
                  <button type="button" className="btn btn-light mx-2">
                    <i className="fa fa-envelope" aria-hidden="true"></i> Email
                  </button>
                </a>
              </span>
            </div>
          </section>
        </section>
      </div>
      {/* portfolio */}
      <h1 id="portfolio">Portfolio</h1>
      <br></br>
      {projects.map((project) => (
        <ProjectCard
          img={project.img}
          deployed={project.deployed}
          title={project.title}
          description={project.description}
          repo={project.repo}
        />
      ))}

      {/* resume */}
      <h1 id="resume">Resume</h1>
      <br></br>
      <img
        src="https://proflonghair07.github.io/resume/Murphy_Resume.png"
        width="1075"
        height="1800"
      ></img>
      <img
        src="https://proflonghair07.github.io/resume/Murphy_Resume_2.png"
        width="1075"
        height="1800"
      ></img>
    </main>
  );
}
export default Main;
