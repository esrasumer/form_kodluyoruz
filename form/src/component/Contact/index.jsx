import {useState, useEffect} from 'react'
import Form from './Form'
import List from './List'

function Contact() {
  const[contact,setContact] =useState([]);

  useEffect(() => {
console.log(contact)
  },[contact])

  return (
    <div>
        <Form ahmerusetContact={setContact}/>
        <List />
        </div>  
  )
}

export default Contact