import React from 'react';
import PropTypes from 'prop-types';

import {
  InputStyled,
} from './styled';

const InputField = ({
  onChange, value, type,
}) => (
  <InputStyled
    value={value}
    onChange={onChange}
    type={type}
  />
);

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
