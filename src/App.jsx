import Header from './common/Header'
import Start from './section/start/Start'
import SectionAdd from './section/add/SectionAdd'
import GetUserAll from './section/list/GetUserAll'

function App() {

  return (
    <>
    <Header/>
    <main className='flex flex-col gap-10 w-full min-h-dvh justify-center items-center mt-25'>
      <section id='start' className='flex justify-center items-center w-auto h-auto mb-20 sm:mb-0'>
        <Start/>
      </section>
      <section id="list" className='w-full h-auto'>
        <GetUserAll/>
      </section>
      <section id='add' className='w-full h-auto'>
        <SectionAdd/>
      </section>
    </main>
    </>
  )
}

export default App
