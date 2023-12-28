import PropTypes from 'prop-types';

const Input = ({ type, placeholder }) => {
  return (
    <input
      className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      type={type}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input;
