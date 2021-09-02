import React from "react";
import WorksContent from "./WorksContent";
import { worksData } from "./worksData";

function WorksContents() {
  return (
    <div className="works_contents grid">
      {worksData.map((work) => (
        <WorksContent
          title={work.title}
          description={work.description}
          href={work.href}
          img={work.img}
          id={work.id}
        />
      ))}
    </div>
  );
}

export default WorksContents;
