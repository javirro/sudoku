import Square from './Square'
import '../styles/main.css'
const Main = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <main className='main-table'>
      {numbers.map((n: number) => (
        <Square key={n} />
      ))}
    </main>
  )
}

export default Main
