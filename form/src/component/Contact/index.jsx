import {useState, useEffect} from 'react';
import Form from './Form';
import List from './List';

function Contact() {
const [contact, setContact] = useState([]);

useEffect(() => {
  console.log(contact);
}, [contact])

  return (    <div>
        <Form addContact={setContact} contact={contact} />
        <List />
        </div>  
  )
}

export default Contact;