import { useState, useEffect } from 'react'
import Header from './common/Header'
import Start from './section/start/Start'
import SectionAdd from './section/add/SectionAdd'
import GetUserAll from './section/list/GetUserAll'
import Loading from './common/Loading'
import Error from './common/Error'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Simulación de carga de datos o inicialización
    const timer = setTimeout(() => {
      // Simula un error para probar (puedes ponerlo a false para que no falle)
      const hasError = false;

      if (hasError) {
        setError(true);
      } else {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if(loading) return <Loading/>
  if(error) return <Error/>

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
