function Error(){
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 dark:bg-red-900">
        <p className="text-lg font-bold text-red-600 dark:text-red-300">Algo salió mal :c</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reintentar
        </button>
      </div>
        </>
    )
}

export default Error;