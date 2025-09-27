import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export const AddContact = () => {
    const location = useLocation();
    const editingContact = location.state?.editingContact || null;

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (editingContact) {
            setNewContact(editingContact);
        }
    }, [editingContact]);

    const createContact = async () => {
        try {
            const response = await fetch(
                "https://playground.4geeks.com/contact/agendas/Jesus/contacts",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...newContact,
                        agenda_slug: "Jesus",
                    }),
                }
            );
            if (response.ok) {
                console.log("Se creó el contacto");
                setNewContact({ name: "", email: "", phone: "", address: "" });
                return true;
            } else {
                console.log("Error al crear contacto", response.status);
                return false;
            }
        } catch (error) {
            console.log("Error en createContact", error);
            return false;
        }
    };

    const editContact = async () => {
        try {
            const response = await fetch(
                `https://playground.4geeks.com/contact/agendas/Jesus/contacts/${editingContact.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newContact),
                }
            );
            if (response.ok) {
                console.log("Contacto editado");
                setNewContact({ name: "", email: "", phone: "", address: "" });
                return true;
            } else {
                console.log("Error al editar contacto", response.status);
                return false;
            }
        } catch (error) {
            console.log("Error en editContact", error);
            return false;
        }
    };

    return (
        <>
            <form
                className="container"
                onSubmit={async (event) => {
                    event.preventDefault();
                    let success = false;
                    if (editingContact) {
                        success = await editContact();
                    } else {
                        success = await createContact();
                    }
                    if (success) {
                        navigate("/Contact");
                    }
                }}
            >
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto d-flex justify-content-center">
                        <h1>{editingContact ? "Edit Contact" : "Add new contact"}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <label htmlFor="FullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="form-control"
                            value={newContact.name}
                            onChange={(event) =>
                                setNewContact({ ...newContact, name: event.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-12">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            value={newContact.email}
                            onChange={(event) =>
                                setNewContact({ ...newContact, email: event.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-12">
                        <label htmlFor="Phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone"
                            value={newContact.phone}
                            onChange={(event) =>
                                setNewContact({ ...newContact, phone: event.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-12">
                        <label htmlFor="Address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                            value={newContact.address}
                            onChange={(event) =>
                                setNewContact({ ...newContact, address: event.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-12">
                        <button type="submit" className="form-control bg-primary text-light">
                            Save
                        </button>
                    </div>
                </div>

                <div>
                    <Link to="/Contact">or get back to contacts</Link>
                </div>
            </form>
        </>
    );
};
