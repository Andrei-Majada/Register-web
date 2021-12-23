import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const Button = ({
  children, onClick, variant, disabled,
}) => (
  <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
};

export default Button;