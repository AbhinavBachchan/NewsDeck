import React, { Component } from "react";
import "./NewsItem.css";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "21rem" }}>
          <div className="source">
            <span className="badge rounded-pill bg-danger">{source} </span>
          </div>
          <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230731110755-mega-millions-2023.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
