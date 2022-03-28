import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Test from './Test';


function App() {
// const [users, setUsers] = useState([]) ;
// const [loading, setLoading] = useState(false)


// useEffect(() => {
//   const fetchUsers = async() => {
//     try {
//       const {data} = await axios.get()
//     } catch (error) {
      
//     }

//   }

//   return () => {
//     second
//   }
// }, [third])



  return (
    <div className="App">
     <Test /> 

    </div>
  );
}

export default App;
