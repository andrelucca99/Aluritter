import { Link } from 'react-router-dom';
import { App } from '../layouts/App';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = ({ email, password }) => {
    console.log('Criando conta...', email, password);
  };

  return (
    <App>
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <h1 className='font-primary text-xl text-sky-500 pb-1'>Aluritter</h1>
        <form
          className='flex flex-col w-full lg:1/4 md:w-1/3 sm:w-1/2 px-10 sm:px-0'
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <Input
              type="email"
              placeholder='email@exemplo.com'
              { ...register('email', {
                required: true,
                maxLength: 255,
                minLength: 5,
              }) }
              className={classNames(
                "w-full p-2 border border-slate-400 rounded text-gray-500 placeholder-slate-300",
                {
                  "border-red-500": errors.email?.type === 'required',
                }
              )}
            />
            {errors.email?.type === 'required' ? (
              <span className='text-sm text-red-500 pl-1'>
                Email é obrigatório
              </span>
            ) : null}

            {errors.email?.type === 'minLength' ? (
              <span className='text-sm text-red-500 pl-1'>
                O email precisa ter pelo menos cinco caracteres
              </span>
            ) : null}
          </div>
          <div className='mt-2.5'>
            <Input
              type="password"
              placeholder='Senha'
              { ...register("password", {
                required: true,
                maxLength: 255,
                minLength: 8,
              }) }
              className={classNames(
                "w-full p-2 border border-slate-400 rounded text-gray-500 placeholder-slate-300",
                {
                  "border-red-500": !!errors.password,
                }
              )}
            />

            {errors.password?.type === 'required' ? (
              <span className="text-sm text-red-500 pl-1">
                Senha é obrigatória
              </span>
            ) : null}

            {errors.password?.type === 'minLength' ? (
              <span className="text-sm text-red-500 pl-1">
                A senha precisa ter pelo menos oito caracteres
              </span>
            ) : null}
          </div>
          
          <Button>Acessar plataforma</Button>
          <span className='text-sm mt-2 text-gray-500'>
            Já possui uma conta?{" "}
            <Link className='text-sky-500 hover:underline' to="/sing-up">
              Acesse agora!
            </Link>
          </span>
        </form>
      </div>
    </App>
  );
};
