

const Card = ({muscle}) => {

  const handleClick = (id) => {
    console.log(`TODO redirect to muscle exercises page of muscle with id ${id}`);
  }
  return (
    <div className="muscle-card">
      <h1>{muscle.name}</h1>
      <button className="my-button" onClick={() => handleClick(muscle.id)}>See exercises</button>
    </div>
  )
}

export default Card
