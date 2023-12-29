import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

export const InputEmail = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <input
        type='email'
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
      {/* {errors.email?.type === 'required' ? (
        <span className='text-sm text-red-500 pl-1'>
          Email é obrigatório
        </span>
      ) : null}

      {errors.email?.type === 'minLength' ? (
        <span className='text-sm text-red-500 pl-1'>
          O email precisa ter pelo menos cinco caracteres
        </span>
      ) : null}     */}
    </>
  );
}

// InputEmail.propTypes = {
//   type: PropTypes.string,
// }
