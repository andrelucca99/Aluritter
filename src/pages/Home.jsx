import { App } from '../layouts/App';

export const Home = () => (
  <App>
    <header className='flex justify-between items-center bg-white p-1 pl-4 pr-4'>
      <h1 className="text-md text-sky-600">Aluritter</h1>
      <div className='flex justify-between gap-5 items-center'>
        <span className='text-sm text-gray-400'>andrelucca99@gmail.com</span>
        <button className='bg-red-500 rounded text-white text-sm p-2'>sair</button>
      </div>
    </header>
    <main className='bg-slate-100 flex flex-col items-center justify-start w-full h-screen'>
      <section className='flex flex-col items-start justify-betweem w-4/5 pt-10'>
        <div className='w-full flex flex-col pl-2 gap-4'>
          <label className='text-sm text-gray-500'>Alurite agora mesmo...</label>
          <textarea
            rows="7"
            cols="100"
            minLength="10"
            maxLength="255"
          ></textarea>
          <div className='flex items-end justify-between'>
            <span
              className='text-sm text-green-400'
            >
              Você ainda pode digitar 255 caracteres
            </span>
            <button className='bg-sky-400 rounded text-white text-sm p-2'>Aluritar</button>
          </div>

          <div className='w-full bg-white flex flex-col gap-4 p-2'>
            <p className='text-md text-gray-400'>Seven7OfCode com React =DDD</p>
            <div className='flex items-center justify-between'>
              <p className='text-sm text-sky-400'>matheushcastiglioni@gmail.com</p>
              <p className='text-sm text-gray-400'>6/30/2023, 3:52:49 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </App>
);
