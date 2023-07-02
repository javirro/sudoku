export interface GameResult {
  [key: string]: number[];
  "1": number[];
  "2": number[];
  "3": number[];
  "4": number[];
  "5": number[];
  "6": number[];
  "7": number[];
  "8": number[];
  "9": number[];
}

export interface SquareProps {
  game: GameResult;
  squareId: string;
  setGame: (arg0: GameResult) => void
}
