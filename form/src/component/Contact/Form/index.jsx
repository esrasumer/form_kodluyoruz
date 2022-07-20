import { useState } from 'react';

function Form( {addContact, contact}) {
    const [form,setForm]= useState({fullname:"" , phone_number:""});

    const onChangeInput =(e)=> {
        setForm ({...form , [e.target.name]:  e.target.value})
    }
 const onSubmit = (e)=> {
    e.preventDefault();  //sayfanın yenilenmesini engeller

  if(form.fullname === "" || form.phone_number === ""){
 return false;
 }  
 addContact([...contact , form]);    
 setForm({fullname:"" , phone_number:""})
 };
  return (
    <form onSubmit={onSubmit}> <div>   
      {/* onSubmit={onSubmit} yazmamız ne işe yaradı? */}
        <input placeholder='Full Name' name='fullname' onChange={onChangeInput} value={form.fullname}/>
       
    </div>
    <div>
         <input placeholder='Phone Number' name='phone_number' onChange={onChangeInput} value={form.phone_number}/>
    </div>
    <div>
        <button onClick={onSubmit}>Add</button>
    </div>
    {/* {form.fullname && <div>
        <div>Name: {form.fullname}</div>
        <div>Phone: {form.phone_number}</div>
      </div>} */}
    </form>
  )
}

export default Form;