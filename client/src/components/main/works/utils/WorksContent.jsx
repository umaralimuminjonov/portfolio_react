import React from "react";

function WorksContent(props) {
  return (
    <div className="works_content grid">
      <img src={props.img} alt="" className="works_img" />
      <div className="works_data">
        <h3 className="works_title">{props.title}</h3>
        <p className="works_description">{props.description}</p>
        <a href={props.href} className="works_link">
          View
        </a>
      </div>
    </div>
  );
}

export default WorksContent;
