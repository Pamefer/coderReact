import './App.css';
import {useState} from 'react';
import Table from './Table';


function App() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [number, setNumber]=useState("");
  const [contacts, setContacts]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!name.trim()){
      console.log("You name is empty!")
      return;
    }
    if(!email.trim()){
      console.log("You email is empty!")
      return;
    }
    if(!number.trim()){
      console.log("You number is empty!")
      return;
    }
    setContacts(
      [  
        ...contacts,
        { 
          id:number,
          name,
          number,
          email
        }
      ]
    );
    setName("");
    setNumber("");
    setEmail("");
  }

  const handleInput=(e)=>{
    const value=e.target.value;
    if(e.target.name==="name"){
      setName(value);
      console.log("name", name)
    }
    if(e.target.name==="email"){
      setEmail(value);
      console.log("email", email)

    }
    if(e.target.name==="number"){
      setNumber(value);
      console.log("number", number)

    }
  }

  const deleteName =(id)=>{
    const newContacts = contacts.filter((item)=>item.id!==id)
    setContacts(newContacts)
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className="container">
          <form onSubmit={handleSubmit} >
            <div className="formulario">
              <input
              type="text"
              placeholder="Add Name"
              name="name"
              onChange={(e)=>handleInput(e)}
              value={name}
              />
              <input
              type="number"
              placeholder="Add Number"
              name="number"
              onChange={(e)=>handleInput(e)}
              value={number}
              />
              <input
              type="email"
              placeholder="Add email"
              name="email"
              onChange={(e)=>handleInput(e)}
              value={email}
              />
              <button type="submit">Guardar</button>
            </div>
          </form>
          <Table contacts={contacts} deleteName={deleteName} className="table-results"/>
        </div>
       
      </body>
    </div>
  );
}

export default App;
