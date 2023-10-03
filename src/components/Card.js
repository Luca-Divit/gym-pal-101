import axios from "axios";

const Card = () => {
  axios.get('http://127.0.0.1:3000/muscles', {
    'Access-Control-Allow-Origin': '*'
  })
    .then(response => console.log(response.data))
  return (
    <>
      <h1>Hello world!</h1>
    </>
  )
}

export default Card
