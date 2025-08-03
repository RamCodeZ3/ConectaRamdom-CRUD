import { useState } from 'react'
import Header from './common/Header'
import UsersRandom from './section/start/UsersRandom'
import Title from './section/start/Title'
import CreateUser from './section/add/CreateUser'
import GetUserAll from './section/list/GetUserAll'

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
