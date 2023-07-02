import { GameResult } from "../types/gameTypes"

export const createVerticalCheckArray = (position: number, squareId: number, game: GameResult): number[] => {
  const firstColumn = [1, 4, 7]
  const secondColumn = [2, 5, 8]
  const thirdColumn = [3, 6, 9]
  let line: number[] = []
  let rowToUse: number[] = []
  if (firstColumn.includes(squareId)) rowToUse = rowToUse.concat(firstColumn)
  else if (secondColumn.includes(squareId)) rowToUse = rowToUse.concat(secondColumn)
  else if (thirdColumn.includes(squareId)) rowToUse = rowToUse.concat(thirdColumn)
  if (firstColumn.includes(position)) {
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = [gameRow[0], gameRow[3], gameRow[6]] // the first three items of each row
      line = line.concat(squareNumbers)
    }
  } else if (secondColumn.includes(position)) {
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = [gameRow[1], gameRow[4], gameRow[7]]  // the first three items of each row
      line = line.concat(squareNumbers)
    }
  } else if (thirdColumn.includes(position)) {
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = [gameRow[2], gameRow[5], gameRow[8]]  // the first three items of each row
      line = line.concat(squareNumbers)
    }
  }
  return line
}
