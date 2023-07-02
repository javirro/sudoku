import Square from './Square'
import '../styles/main.css'
import { useState } from 'react'
import { GameResult } from '../types/gameTypes'

const Main = () => {
  const initialGame = {
    "1": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "2": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "3": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "4": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "5": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "6": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "7": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "8": Array(9).fill(0,0, 9).map((_, i) => 0 ),
    "9": Array(9).fill(0,0, 9).map((_, i) => 0 ),
  }
  const [game, setGame] = useState<GameResult>(initialGame)
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  return (
    <main className="main-table">
      {numbers.map((n: string) => (
        <Square key={n} game={game} squareId={n} setGame={setGame} />
      ))}
    </main>
  )
}

export default Main
