import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
import ContactCard from "../component/ContactCard.jsx";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [agendaName, setAgendaName] = useState("alip");
    const navigate = useNavigate();

    const handlerGetContact = async () => {
        try {
            await actions.getOrFetchContacts(agendaName);
        } catch (error) {
            console.error("Error al obtener contactos:", error);
        }
    };

    useEffect(() => {
        handlerGetContact();
    }, []);


    return (
        <div className="container">
            <ul className="list-group mt-3">
                {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.map((contact) => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))
                ) : (
                    <p>No contacts available</p>
                )}
            </ul>
            <br />
            <Link to="/" aria-label="Go to home">
                <button
                    onClick={() => {
                        actions.setCurrentName(agendaName);
                        navigate("/contacts");
                    }}
                    className="btn btn-primary"
                >
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
};
