import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
import ContactCard from "../component/ContactCard.jsx";

export const AddContact = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <ul className="list-group mt-3">
                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <ContactCard item={contact} index={index} key={index} />
                    ))
                ) : (
                    <p>No contacts available</p>
                )}
            </ul>
            <br />
            <Link to="/" aria-label="Go to home">
                <button className="btn btn-primary">Volver al inicio</button>
            </Link>
        </div>
    );
};
