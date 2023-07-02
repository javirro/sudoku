import Square from "./Square"
import "../styles/main.css"
import { useState } from "react"
import { GameResult } from "../types/gameTypes"
import { generateInitState } from "../helpers/squareNumbersGenerator"

const Main = () => {
  const [game, setGame] = useState<GameResult>(generateInitState())
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
