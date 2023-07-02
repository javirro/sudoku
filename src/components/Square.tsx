import '../styles/square.css'
import { GameResult, SquareProps } from '../types/gameTypes'

const Square = ({ game, setGame, squareId }: SquareProps) => {

  const handleNumber = (ev: any, arrayIndex: number) => {
    const newNumber: number = ev.target.value // new added number
    let squareData: number[] = game[squareId] // each array of 9 numbers
    squareData[arrayIndex] = newNumber
    const newGame: GameResult = {...game, [squareId]: squareData }
    setGame(newGame)
  }
 
  const squareNumber: number[] = game[squareId]
  return (
    <div className="square">
      {squareNumber.map((n: number, i: number) =>  <input type='number' className='number-input' value={n} key={i + 1} onChange={(ev) => handleNumber(ev, i )}/>)}
    </div>
  )
}

export default Square
