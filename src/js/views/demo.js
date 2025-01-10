import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
import ContactCard from "../component/ContactCard"

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group mt-3">
				{store.contacts.map((contact, index) => {
					return (
						<ContactCard key={contact.id} item={contact} index={index} />
					)
				})}
			</ul>
			<br />
			<Link to="/" aria-label="Go to home">
				<button className="btn btn-primary">Volver al inicio</button>
			</Link>
		</div>
	);
};
