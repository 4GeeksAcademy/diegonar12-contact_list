import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactCard = ({ item }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mb-3" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://picsum.photos/170/170/"
                        className="img-fluid rounded-circle p-3"
                        alt="Contact avatar"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name || "Name not available"}</h5>
                        <p className="card-text">{item.address || "Address not available"}</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
