import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingContact = location.state?.editingContact;

  const { dispatch } = useGlobalReducer();

  const [newContact, setNewContact] = useState(
    editingContact || { name: "", email: "", phone: "", address: "" }
  );

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingContact
        ? `https://playground.4geeks.com/contact/agendas/Jesus/contacts/${editingContact.id}`
        : "https://playground.4geeks.com/contact/agendas/Jesus/contacts";

      const method = editingContact ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });

      if (response.ok) {
        const saved = await response.json();
        if (editingContact) {
          dispatch({ type: "update_contact", payload: saved });
        } else {
          dispatch({ type: "add_contact", payload: saved });
        }
        navigate("/");
      } else {
        console.log("Error al guardar contacto:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        {editingContact ? "Edit Contact" : "Add a new contact"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newContact.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={newContact.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={newContact.phone}
            onChange={handleChange}
            placeholder="Enter Phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={newContact.address}
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </div>
        <button type="submit" className="btn btn-primary form-control">
          Save
        </button>
      </form>
    </div>
  );
};
