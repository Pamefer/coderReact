import './App.css';
import { useState} from 'react';

const options=[
  {
    id:1,
    name:'Products',
    url:'https://dummyjson.com/products'
  },
  {
    id:2,
    name:'Todos',
    url:'https://dummyjson.com/todos'
  },
  {
    id:3,
    name:'Posts',
    url:'https://dummyjson.com/posts'
  }
]
function App() {
  const [inputValue, setInputValue] = useState({});
  
  const [outputValue, setOutputValue] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  


  const handleInputChange = (event) => {
    setIsSubmitted(false);
    const currentId = event.target.value;
    const selectedObject = options.find((item)=>{
      return item.id === parseInt(currentId)
    });
    setInputValue(selectedObject);
    console.log("-change--",selectedObject)
  }

  const rowTodos=()=>{
    return(
      <>
      <thead>
            <td>id</td>
            <td>todo</td>
            <td>completed</td>
            <td>userId</td>
      </thead>
      <tbody>
      {outputValue.map((item)=>(
        <tr>
          <td>{item.id}</td>
          <td>{item.todo}</td>
          <td>{item.completed}</td>
          <td>{item.userId}</td>
          </tr> 
         ))}
         </tbody>
       </> 
     )
   };
  const rowPosts=()=>{
    return(
      <>
      <thead>
            <td>id</td>
            <td>title</td>
            <td>body</td>
            <td>userId</td>
            <td>tags</td>
            <td>reactions</td>
      </thead>
      <tbody>
      {outputValue.map((item)=>(
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>{item.userId}</td>
          <td>tags</td>
          <td>{item.reactions}</td>
         </tr> 
         ))}
         </tbody>
       </> 
     )
   };

  const rowProducts=()=>{
    return(
      <>
        <thead>
              <td>id</td>
              <td>title</td>
              <td>description</td>
              <td>price</td>
              <td>discountPercentage</td>
              <td>rating</td>
              <td>stock</td>
              <td>brand</td>
              <td>category</td>
              <td>thumbnail</td>
        </thead>
        <tbody>
          {outputValue.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.discountPercentage}</td>
              <td>{item.rating}</td>
              <td>{item.stock}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item.thumbnail}</td>
              <td>images</td>
            </tr> 
          ))}
        </tbody>
      </> 
    )
  }
  const handleSubmit = () => {
    fetch(inputValue.url)
    .then(response => response.json())
    .then(data => {
      if(inputValue.id===1){
        setOutputValue(data.products);
      }
      if(inputValue.id===2){
        setOutputValue(data.todos);
      }
      if(inputValue.id===3){
        setOutputValue(data.posts);
      }
      setIsSubmitted(true)
    })
    .catch(error => console.error('Error:', error));
  }
  
  return (
    <div>
      <h2>Component A</h2>
      <label htmlFor="options">Choose option</label>

      <select name="options" id="options" onChange={handleInputChange} >
        {options.map((option,idx)=>(
          <option value={option.id} key={idx}>{option.name}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <table border="1">
            {isSubmitted && inputValue.id===1 && rowProducts() }   
            {isSubmitted && inputValue.id===2 && rowTodos() }   
            {isSubmitted && inputValue.id===3 && rowPosts() }   
      </table>
    </div>
  );
}
export default App;
