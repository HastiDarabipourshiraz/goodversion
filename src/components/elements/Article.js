import React from "react";
import U2 from "./U2.jpg"
function Article() {
  return (
    <div className="card article">
      <div className="card-header">
          <p className="card-header-title">Creature Features Exhibit</p>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={U2} width="500" height="420"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>Designing an exhibit to engage children  in  learning  about Artificial Intelligence and Machine Learning.</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
