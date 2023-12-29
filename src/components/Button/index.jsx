import PropTypes from 'prop-types';

export const Button = ({ children }) => {
  return(
    <button
      className='mt-5 p-2 rounded bg-emerald-500 hover:bg-emerald-600 text-slate-100'
      type="submit"
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
}