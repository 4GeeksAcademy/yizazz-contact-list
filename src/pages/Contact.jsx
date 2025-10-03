import { useEffect } from "react";
import imagen from "../assets/img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        const createAgenda = async () => {
            try {
                const res = await fetch("https://playground.4geeks.com/contact/agendas/Jesus");
                if (res.status === 404) {
                    await fetch("https://playground.4geeks.com/contact/agendas/Jesus", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({})
                    });
                }
            } catch (err) {
                console.error(err);
            }
        };

        const fetchContacts = async () => {
            try {
                const response = await fetch(
                    "https://playground.4geeks.com/contact/agendas/Jesus/contacts"
                );
                if (response.ok) {
                    const data = await response.json();
                    dispatch({ type: "set_contacts", payload: data.contacts });
                }
            } catch (error) {
                console.error(error);
            }
        };

        createAgenda().then(fetchContacts);
    }, [dispatch]);

    const startEditing = (contact) => {
        navigate("/AddContact", { state: { editingContact: contact } });
    };

    const deleteContact = async (id) => {
        try {
            const response = await fetch(
                `https://playground.4geeks.com/contact/agendas/Jesus/contacts/${id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (response.ok) {
                dispatch({ type: "delete_contact", payload: id });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                {store.contacts.map((contact) => (
                    <div className="row" key={contact.id}>
                        <div id="container-card" className="border">
                            <img id="img-card" src={imagen} alt="imagen rigo" />
                            <div id="info-card">
                                <div className="name pt-2">{contact.name}</div>
                                <div className="location-logo pt-2">
                                    <i id="location" className="fa-solid fa-location-dot"></i>
                                    <div className="location">{contact.address}</div>
                                </div>
                                <div className="phone-logo mt-1">
                                    <i id="phone" className="fa-solid fa-phone-flip"></i>
                                    <div className="phone">{contact.phone}</div>
                                </div>
                                <div className="email-logo mt-1">
                                    <i id="email" className="fa-solid fa-envelope"></i>
                                    <div className="email">{contact.email}</div>
                                </div>
                            </div>
                            <div id="logos-card">
                                <div id="logo-1" className="me-4 mt-2">
                                    <button
                                        id="pencil-button"
                                        onClick={() => startEditing(contact)}
                                    >
                                        <i id="pencil" className="fa-solid fa-pencil"></i>
                                    </button>
                                </div>
                                <div id="logo-2" className="me-3 mt-2">
                                    <button
                                        id="trash-button"
                                        onClick={() => deleteContact(contact.id)}
                                    >
                                        <i id="trash" className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
