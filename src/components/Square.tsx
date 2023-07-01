import '../styles/square.css'
const Square = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="square">
      {numbers.map((n: number) =>  <input type='number' className='number-input' value={n}/>)}
    </div>
  )
}

export default Square
