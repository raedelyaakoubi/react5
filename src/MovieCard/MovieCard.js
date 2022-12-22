import "./MovieCard.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function MovieCard({ el, changeRate,remove }) {
const [setRating] = useState(0);
const handleRating = (rate) => {
    setRating(rate);
    changeRate(el.id, rate);
    };
    function handleClick() {
        window.open(el.trailerSrc);
    }
return (
    <div className="col image-holder " style={{ width: "440px" }}>
    <div className="card text-white shadow-lg bg-transparent">
        <img src={el.posterUrl} className="card-img img-4" alt="..." />
        <div className="card-img-overlay over align-items-start flex-column bd-highlight">
        <div className="d-flex bd-highlight align-items-center w-100">
            <h5 className="card-title mb-auto p-2 bd-highlight">{el.title}</h5>
            <div className="App" style={{ width: "100px" }}>
            <Rating
                transition={true}
                size={15}
                onClick={handleRating}
                initialValue={el.rating}
            />
            </div>
            <div className="icon-close remove-todo-item ms-auto ms-auto p-2 bd-highlight pointeur" onClick={() => remove(el.id)}>
            <i className="fa fa-circle-xmark"></i> 
        </div>
            
        </div>
        <p className="card-text p-2 bd-highlight m-0">{el.description}</p>
        <button
            type="button"
            className="btn btn-outline-danger p-2 bd-highlight"
            onClick={handleClick}
        >
            <i className="fa fa-play"></i> Watch Trailer
        </button>
    </div>
    </div>
    </div>
    
);
}

export default MovieCard;
