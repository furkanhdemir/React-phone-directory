import { useState, useEffect } from "react";
import {} from "./style.css";
import List from "../List";
import Form from "../Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123",
    },
    {
      fullname: "Ahmet",
      phone_number: "251515",
    },
    {
      fullname: "Nazlı",
      phone_number: "9897855",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Phone Number List</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
