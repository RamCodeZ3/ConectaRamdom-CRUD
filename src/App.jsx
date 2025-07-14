import { useState } from 'react'
import Header from './component/Header'
import ListUsers from './component/ListUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className='flex w-full min-h-dvh bg-[#1E1E1E] mt-10 justify-center items-center'>
      <div>
        <ListUsers/>
      </div>
    </main>
    </>
  )
}

export default App
