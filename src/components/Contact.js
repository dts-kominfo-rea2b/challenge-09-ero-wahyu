// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = (props) => {
  return (
    <div className="">
      {props.contacts.map((contact) => {
        return (
          <main>
            <aside>
              <img src={contact.photo} alt="" />
            </aside>
            <aside className="center">
              <h5>{contact.name}</h5>
              <h5>{contact.phone}</h5>
              <h5>{contact.email}</h5>
            </aside>
          </main>
        );
      })}
    </div>
  );
};

export default Contact;
