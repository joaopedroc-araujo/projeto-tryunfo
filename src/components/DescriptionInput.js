import React, { Component } from 'react';

export default class DescriptionInput extends Component {
  render() {
    return (
      <input
        type="textarea"
        data-testid="description-input"
        placeholder="Digite a descrição da carta"
      />
    );
  }
}
