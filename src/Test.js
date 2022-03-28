import axios from 'axios';
import React, { useState } from 'react'

const Test = () => {
const [text, setText] = useState('');
const [result, setResult] = useState([]) ;
const [loading, setLoading] = useState(false)

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

 const handleSubmit = (e) => {
     e.preventDefault ();
     const tasty = async ()=> {
         setLoading(true)
         const res =  await axios.request(options)
         console.log(res)
         setResult(res.data.data)
         setLoading(false)
     }
tasty()
console.log(result)
 }


 var options = {
    method: 'GET',
    url: `https://recipesapi2.p.rapidapi.com/recipes/${text}`,
    params: {maxRecipes: '2'},
    headers: {
      'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
      'X-RapidAPI-Key': 'd03b6b8f15mshad393d4ab37a328p18b5f7jsn0bba0a20af4c'
    }
  };;




  return (
    <div>
        
        <form action=""  onSubmit={handleSubmit}  >
            <input   
            type ="text"
            value ={text}
            onChange = {(e)=>setText(e.target.value)}
            >
              
            </input>
            <button>GO</button>
        </form>

         {
             loading? <h2>loading...</h2>
             : 
             <div>

                   {
                         result.length > 0 &&
                       
                       <div>
                           <div>
                               <h3>INGREDIENTS</h3>
                               { result[0].ingredients.map(el=>
                           
                                <p> {el} </p>
                           
                                )}
                           </div>
                            <div>
                           <img  height={300} width={500} src={result[0].image} alt="" />
                            </div>
                       </div>

                    }     
             </div>
         }


    </div>
  )
}

export default Test