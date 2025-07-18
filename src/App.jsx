import { useState } from 'react'
import Header from './component/Header'
import ListUsers from './component/ListUsers'
import Title from './component/Title'
import CreateUser from './component/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className='flex flex-col gap-10 w-full min-h-dvh justify-center items-center mt-25'>
      <div className='flex justify-center items-center w-auto h-auto'>
        <Title/>
      <div><ListUsers/></div>
      </div>
      <div>
        <CreateUser/>
      </div>
    </main>
    </>
  )
}

export default App
