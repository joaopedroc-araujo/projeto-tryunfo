import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr2 extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        <input
          type="number"
          data-testid="attr2-input"
          placeholder="Digite o segundo atributo da carta"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr2.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
