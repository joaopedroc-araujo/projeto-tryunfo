import React, { Component } from 'react';

export default class Attr2 extends Component {
  render() {
    return (
      <label>
        <input
          type="number"
          data-testid="attr2-input"
          placeholder="Digite o segundo atributo da carta"
        />
      </label>
    );
  }
}
