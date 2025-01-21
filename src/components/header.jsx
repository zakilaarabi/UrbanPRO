import React from "react";

 export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
            <div className="container-header" >
              <div className="row" >
                <div className="col-md-8 intro-text">
                  <h1 className="welcome">
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="#features"
                    className="btn btn-custom page-scroll"
                  >
                    Más información
                  </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 