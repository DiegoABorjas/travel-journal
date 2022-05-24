import React from "react"

export default function Header(props) {
    return(
        <>
        <section className="entries-section">
            <img src={props.imageUrl} alt="" className="imageUrl"/>
            <div className="entry-details">
                <div className="location-details">
                    <img src="../images/location.png" alt="" />
                    <span className="location">{props.location}</span>
                    <a className="googleMapsUrl" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <span className="startDate">{props.startDate}</span>
                <span className="endDate"> {props.endDate} </span>
                <p className="description">{props.description}</p>
            </div>            
        </section>
        <hr className="line-divider"/>
        </>
        
    )
}

