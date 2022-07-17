import { useState } from 'react';

function Form( setContact) {
    const [form,setForm]= useState({fullname:"" , phone_number:""})

    function onChangeInput(e) {
        setForm ({...form , [e.target.name]:  e.target.value})
    }
 function onSubmit(e){
    e.preventDefault();  //sayfanın yenilenmesini engeller
  if(form.fullname === "" || form.phone_number === ""){
 return false;
 }      

 };
 // isteğim gibi çalışmadı



  return (
    <div>
    <div>
        <input placeholder='Full Name' name='fullname' onChange={onChangeInput}/>
       
    </div>
    <div>
         <input placeholder='Phone Number' name='phone_number' onChange={onChangeInput}/>
    </div>
    <div>
        <button onClick={onSubmit}>Add</button>
    </div>
    {/* {form.fullname && <div>
        <div>Name: {form.fullname}</div>
        <div>Phone: {form.phone_number}</div>
      </div>} */}
    </div>
  )
}

export default Form;