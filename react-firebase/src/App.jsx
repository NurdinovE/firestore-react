import { async } from '@firebase/util'
import { useEffect } from 'react'
import { useState } from 'react'
import { getDocs,collection } from 'firebase/firestore'
import './App.css'
import Auth from './component/Auth'
import {database} from "./firebase-config/firebase"


function App() {
  const [movie, setMovie] = useState([])

const movieCollectionRef = collection(database, "movies")

useEffect(() => {
  const getMovie = async () => {
    try{
      const data = await getDocs(movieCollectionRef);
      console.log(data);
    } catch(err){
      console.log((err));
    }
  } 
  getMovie()
},[])

  

  return (
    <div className="App">
      <Auth/>
    </div>
  )
}

export default App
