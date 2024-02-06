import React from "react";

export const Gifs = ({ id, title, url }) => {
  return (
    <>
      <div className="card-grid">
        <div key={id} className="card">
          <p className="card p">{title}</p>
          <img src={url} alt="" className="card img" />
        </div>
      </div>
    </>
  );
};
