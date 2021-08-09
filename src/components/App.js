import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import Header from "./Header";
import AddContact from "./AddContact";
import ButtonAddContact from "./ButtonAddContact";
import "../css/App.css";
import useContact from "../hooks/useContact";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({
    fullname: "",
    nickname: "",
    phone_number: "",
  });

  const contacts = useContact(
    "https://mock-contact-list-api.herokuapp.com/contact"
  );

  useEffect(() => {
    if (!contacts.loading && contacts.data) {
      setData(contacts.data);
    }
  }, [contacts]);

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
      setData([...data, post.data]);
    }
    handleCloseModal();
    setNewContact({ fullname: "", nickname: "", phone_number: "" });
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      {contacts.loading ? (
        <main>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <h1>Loading</h1>
          </div>
        </main>
      ) : (
        <main>
          <section id="contact-list">
            <ContactList contacts={data} />
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
