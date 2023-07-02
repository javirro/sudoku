import { GameResult } from "../types/gameTypes"

export const createHorizontalCheckArray = (position: number, squareId: number, game: GameResult): number[] => {
  const firstRow = [1, 2, 3]
  const secondRow = [4, 5, 6]
  const thirdRow = [7, 8, 9]
  let line: number[] = []
  let rowToUse: number[] = []
  if (firstRow.includes(squareId)) rowToUse = rowToUse.concat(firstRow)
  else if (secondRow.includes(squareId)) rowToUse = rowToUse.concat(secondRow)
  else if (thirdRow.includes(squareId)) rowToUse = rowToUse.concat(thirdRow)
  if (firstRow.includes(position)) {
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = gameRow.slice(0, 3) // the first three items of each row
      line = line.concat(squareNumbers)
    }
  } else if (secondRow.includes(position)) {
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = gameRow.slice(3, 6) // the first three items of each row
      line = line.concat(squareNumbers)
    }
  } else if (thirdRow.includes(position)) {
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = gameRow.slice(6) // the first three items of each row
      line = line.concat(squareNumbers)
    }
  }
  return line
}
