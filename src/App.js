import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./ContactList";
import Header from "./Header";
import AddContact from "./AddContact";
import ButtonAddContact from "./ButtonAddContact";
import "./App.css";

const App = () => {
  const [contact, setContact] = useState({
    loading: false,
    data: [],
    error: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({
    fullname: "",
    nickname: "",
    phone_number: "",
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNewContact = (e) => {
    const { name, value } = e.target;
    setNewContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitNewContact = async () => {
    const post = await axios.post(
      "https://mock-contact-list-api.herokuapp.com/contact",
      newContact
    );
    if (post.status === 201) {
      setContact({ ...contact, data: [...contact.data, post.data] });
    }
    handleCloseModal();
    setNewContact({ fullname: "", nickname: "", phone_number: "" });
  };

  useEffect(() => {
    const getContact = async () => {
      try {
        setContact({ ...contact, loading: true });

        const response = await axios.get(
          "https://mock-contact-list-api.herokuapp.com/contact"
        );

        if (response.status === 200) {
          setContact({ ...contact, loading: false, data: response.data });
        } else {
          setContact({ ...contact, error: response.statusText });
        }
      } catch (error) {
        setContact({ ...contact, error: error.response.data });
      }
    };

    getContact();
  }, []);

  return (
    <div className="container-fluid p-0">
      <Header />
      {contact.loading ? (
        <main>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <h1>Loading</h1>
          </div>
        </main>
      ) : (
        <main>
          <section id="contact-list">
            <ContactList contacts={contact.data} />
          </section>
          <section id="button-add">
            <ButtonAddContact handleShowModal={handleShowModal} />
          </section>
          <section id="form-add-new-contact">
            <AddContact
              handleCloseModal={handleCloseModal}
              showModal={showModal}
              newContact={newContact}
              handleNewContact={handleNewContact}
              handleSubmitNewContact={handleSubmitNewContact}
            />
          </section>
        </main>
      )}
    </div>
  );
};

export default App;
