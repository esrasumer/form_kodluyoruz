import {useState} from 'react'
function List({contact}) {
  const[filterText,setFilterText] = useState("");

  const filtered = contact.filter((item)=>{
    return Object.keys(item).some((key)=>{
return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
    });
  });

  console.log("filtered: ",filtered);

  return (
    <div>
<input 
  id='fılterContactInput' 
  placeholder='Fılter Contact'
  value={filterText}
  onChange={(e) => setFilterText(e.target.value)} 
  />

      <ul>
       { filtered.map((contact,i) =>(
        <li key={i}>{contact.fullname}</li>
       )
       )
       }
{/*        
       { contact.map((contact,i)=>(
        <li key={i}>{contact.phone_number}</li>
       ))
       } 
       */}
      </ul>
    </div>
  )
}

export default List;