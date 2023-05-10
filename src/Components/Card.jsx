import React from "react"

export default function Card(props) {
  console.log(props)
    return (
        <div className="card">
            {props.data.openSpots===0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.data.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) • </span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><span className="bold">From ${props.data.price}</span> / person</p>
        </div>
    )
}