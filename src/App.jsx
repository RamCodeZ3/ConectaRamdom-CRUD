import { useState } from 'react'
import Header from './component/Header'
import ListUsers from './component/ListUsers'
import Title from './component/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className='flex gap-3 w-full min-h-dvh justify-center items-center'>
      <Title/>
      <div className='flex justify-center items-center w-auto h-[10%]'>
        <ListUsers/>
      </div>
    </main>
    </>
  )
}

export default App
