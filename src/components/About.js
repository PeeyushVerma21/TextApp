import React from "react";

export default function About(props) {
  
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
  };

  return (
    <div classNameName="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our platform is designed to help you unlock the full potential of
              your writing. By leveraging advanced algorithms and deep
              linguistic insights, we provide you with the tools to analyze,
              refine, and elevate your text. From grammar and style checks to
              readability assessments and keyword optimization, we offer a
              comprehensive suite of services to enhance the clarity, impact,
              and effectiveness of your writing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to TextApp, the ultimate destination for tools and
              resources that are completely free to use. We believe that
              everyone should have access to high-quality services without the
              barriers of cost or complexity. That's why we've created a
              platform where you can explore, create, and learn—without any fees
              or hidden charges.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              At TextApp, we prioritize accessibility and
              convenience. That's why we've ensured that our platform is fully
              browser compatible, so you can access our services seamlessly from
              any device, anywhere, and at any time. Whether you're using
              Chrome, Firefox, Safari, Edge, or any other popular web browser,
              our site is designed to deliver a smooth and consistent
              experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
