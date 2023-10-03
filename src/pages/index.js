import Navbar from '../components/Navbar';
import Card from '../components/Card';
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [muscles, setMuscles] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/muscles')
      .then(response => setMuscles(response.data))
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className="cards">
          {muscles.map(m => <Card key={m.id} muscle={m}/> )}
        </div>
      </div>
    </div>
  )
}

export default Home;
