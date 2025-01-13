import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };


  const submitContact = async (e) => {
    e.preventDefault();
    try {
      const resultado = await actions.addContact(contact);
      if (resultado) {
        alert("Contacto agregado exitosamente.");
        navigate("/addContact");
      } else {
        alert("No se pudo agregar el contacto. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="row g-3 needs-validation w-50" onSubmit={submitContact}>
        <div className="col-md-12">
          <label htmlFor="validationFirstName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationFirstName"
            placeholder="John"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationPhone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="validationPhone"
            placeholder="123-456-7890"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid phone number.</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="validationEmail"
            placeholder="john.doe@example.com"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid email.</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationAddress" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="validationAddress"
            placeholder="123 Main St, City, Country"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid address.</div>
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-primary" type="submit">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};
