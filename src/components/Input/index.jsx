import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Input = forwardRef(({ type, placeholder, ...rest }, ref) => {  
  return (
    <>
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  )
})

Input.displayName = 'Input';


Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
