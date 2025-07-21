import { useState } from 'react'
import Header from './component/Header'
import UsersRandom from './component/UsersRandom'
import Title from './component/Title'
import CreateUser from './component/CreateUser'
import ListUsers from './component/UsersRandom'
import GetUserAll from './component/GetUserAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className='flex flex-col gap-10 w-full min-h-dvh justify-center items-center mt-25'>
      <section id='start' className='flex justify-center items-center w-auto h-auto'>
        <Title/>
      <div><UsersRandom/></div>
      </section>
      <section id="list" className='w-full h-auto'>
        <GetUserAll/>
      </section>
      <section id='add' className='w-full h-auto'>
        <CreateUser/>
      </section>
    </main>
    </>
  )
}

export default App
