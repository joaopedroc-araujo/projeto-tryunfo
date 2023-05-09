import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        <input
          type="text"
          data-testid="image-input"
          placeholder="Insira o caminho para imagem da carta"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
