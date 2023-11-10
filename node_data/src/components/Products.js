
import {useEffect, useState, useRef, Fragment} from 'react';

const url= 'http://localhost:8000/products/?format=json';


function ProductsList(){
 const [status, setStatus] = useState('');
 const [list, setList] = useState([]);
 useEffect(()=>{
    setStatus('Loading');
    fetch(url)
      .then(response => response.json())
      .then(setList)
      .then(()=>setStatus('Success'))
      .catch(()=>setStatus('Error'));
  }, []);
  
  return (
    <div>
      <h3>Products</h3>
       {status === 'Loading' && <div>Loading...</div>}
       {status === 'Error' && <div>There was an error</div>}
       {status === 'Success' &&
        <select>
          {list.map(todo => <option>{todo.name}</option>)}
        </select>
       }
       <Fragment>
        <hr></hr>
        <div>Añadir productos</div>
        <div><input name='name' placeholder='Nombre' /></div>
     </Fragment>
     </div>
   );
}
export default ProductsList