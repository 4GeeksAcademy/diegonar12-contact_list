import React from "react";
import "../../styles/home.css";

export const Home = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <form className="row g-3 needs-validation w-50" noValidate>
      <div className="col-md-6">
        <label htmlFor="validationFirstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="validationFirstName" placeholder="John" required />
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationLastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="validationLastName" placeholder="Doe" required />
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-md-12">
        <label htmlFor="validationEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="validationEmail" placeholder="john.doe@example.com" required />
        <div className="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>
      <div className="col-md-12">
        <label htmlFor="validationPhone" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="validationPhone" placeholder="123-456-7890" required />
        <div className="invalid-feedback">
          Please provide a valid phone number.
        </div>
      </div>
      <div className="col-md-12">
        <label htmlFor="validationAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="validationAddress" placeholder="123 Main St, City, Country" required />
        <div className="invalid-feedback">
          Please provide a valid address.
        </div>
      </div>
      <div className="col-12 text-center">
        <button className="btn btn-primary" type="submit">Submit Form</button>
      </div>
    </form>
  </div>
);
