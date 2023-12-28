import { Link } from 'react-router-dom';
import { App } from '../layouts/App';
import Input from '../components/Input';

export const Home = () => (
  <App>
    <div className="flex flex-col items-center justify-center w-full h-screen gap-3">
      <h1 className="text-sky-600 font-primary font-normal text-xl">Aluritter</h1>
      <form className='flex flex-col w-96 gap-2'>
        <Input type='email' placeholder='email@exemplo.com' />
        <Input type='password' placeholder='senha' />
        <button
          type='submit'
          className='bg-emerald-500 text-white font-normal p-2 rounded-md mt-3 text-md'
        >
          Criar uma nova conta
        </button>
      </form>
      <span className='text-gray-400 text-sm'>
        Já possui uma conta? <Link to="/cadastro" className='text-sky-500'>Acesse agora!</Link>
      </span>
    </div>
  </App>
);
