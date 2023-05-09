import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        <input
          type="text"
          data-testid="name-input"
          placeholder="Digite o nome da carta"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
