import {useState, useEffect} from 'react';
import Form from './Form';
import List from './List';

function Contact() {
const [contact, setContact] = useState([
  {
  fullname:"Mehmet",
   phone_number:"09864",
},
{
  fullname:"Esra",
  phone_number:"123445",
},
{
  fullname:"Esma",
  phone_number:"065436",
},

]);



useEffect(() => {
  console.log(contact);
}, [contact])

  return (    <div id='container'>
        <Form addContact={setContact} contact={contact} />
        <List contact={contact} />
        </div>  
  )
}

export default Contact;