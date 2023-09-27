import { useState } from "react";
import "./App.css";
import FeedbackForm from "./FeedbackForm";

/* Example of what renders first 1*/
const Button=({children, ...rest})=>{
  console.log("-2--",rest)
  return(
    <button onClick={()=>console.log("ButtonClick")} {...rest}>
    {children}
   </button>
  )
};

const withClick=(Component)=>{
  const handleClick=()=>{
    console.log("-1-")
    console.log("withClickhh")
  }
  return(props)=>{
    return<Component {...props} onClick={handleClick}/>;
  }
}

const MyButton=withClick(Button);
export default function App() {
  return <MyButton newprop="pame" onClick={()=>console.log("AppClick") }>Submit</MyButton>
}


/* Example of what renders first 2*/
// const ToDo=(props)=>(
//   <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>
//     <td>
//       <input />
//     </td>
//     <td>
//       <label>{props.createdAt}</label>
//     </td>
//   </tr>
// )

// export default function App(){
//   const [todos, setTodos]=useState([
//     {
//       id:'todo1',
//       createdAt:'18:00'
//     },
//     {
//       id:'todo2',
//       createdAt:'20:30'
//     }
//   ])

//   const reverseOrder=()=>{
//     setTodos([...todos.reverse()])
//   }

//   return(
//     <div>
//       <button onClick={reverseOrder}>Reverse</button>
//       {
//         todos.map((todo,index)=>(
//           <ToDo key={index} id={todo.id} createdAt={todo.createdAt}/>
//         ))
//       }
//     </div>
//   )
// }


/* App de pruebas*/
// function App() {
//   const handleSubmit = () => {
//     console.log("Form submitted!");
//   };

//   return (
//     <div className="App">
//       <FeedbackForm onSubmit={handleSubmit} />
//     </div>
//   );
// }

// export default App;
