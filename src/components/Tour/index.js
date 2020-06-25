import React, { useState } from 'react'
import "./Tour.css"
export default function Tour(props) {
  const { id, img, city, name, info } = props.tour;
  const { removeTour } = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="tour">
      <div className="img__container">
        <img src={img} alt={name} />
        <span onClick={() => removeTour(id)} className="closeBtn"><i className="fas fa-times fa-lg"></i></span>
      </div>
      <div className="tour__info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>info <span onClick={() => setShowInfo(!showInfo)} ><i className="fas fa-caret-square-down"></i></span></h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  )
}
