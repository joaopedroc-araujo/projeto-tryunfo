import React, { Component } from 'react';

export default class ImageInput extends Component {
  render() {
    return (
      <label>
        <input
          type="text"
          data-testid="image-input"
          placeholder="Insira o caminho para imagem da carta"
        />
      </label>
    );
  }
}
