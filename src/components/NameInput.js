import React, { Component } from 'react';

export default class NameInput extends Component {
  render() {
    return (
      <label>
        <input
          type="text"
          data-testid="name-input"
          placeholder="Digite o nome da carta"
        />
      </label>
    );
  }
}
