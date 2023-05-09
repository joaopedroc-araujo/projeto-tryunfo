import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr3 extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        <input
          type="number"
          data-testid="attr3-input"
          placeholder="Digite o terceiro atributo da carta"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr3.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
