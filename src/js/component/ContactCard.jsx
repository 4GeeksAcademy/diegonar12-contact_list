import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(contact.id);
    };
    

    return (
        <div className="card mb-3" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="img-fluid rounded-circle p-3"
                        alt="Contact avatar"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name || "Name not available"}</h5>
                        <p className="card-text">{contact.email || "Address not available"}</p>
                        <p className="card-text">{contact.phone || "Address not available"}</p>
                        <p className="card-text">{contact.address || "Address not available"}</p>
                        <p className="card-text">
                        <button onClick={handleDelete}>Delete</button>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
