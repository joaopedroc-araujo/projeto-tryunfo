import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="textarea"
        data-testid="description-input"
        placeholder="Digite a descrição da carta"
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
