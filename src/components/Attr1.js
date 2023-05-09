import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr1 extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        <input
          type="number"
          data-testid="attr1-input"
          placeholder="Digite o primeiro atributo da carta"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr1.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
