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
				{store.contactList.map((contact, index) => {
					return (
						<ContactCard key={contact.id} item={contact} index={index} />
					)
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Otra vista</button>
			</Link>
		</div>
	);
};
