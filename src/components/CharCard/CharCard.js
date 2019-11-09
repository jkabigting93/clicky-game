import React from "react";
import "./CharCard.css";

const CharCard = props => (

			<div onClick={() => props.setClicked(props.id)} className="card col-md-3">
				<div className="img-container">
					<img alt={props.name} src={props.image} />
				</div>
			</div>
);

export default CharCard;