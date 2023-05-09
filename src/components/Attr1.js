import React, { Component } from 'react';

export default class Attr1 extends Component {
  render() {
    return (
      <label>
        <input
          type="number"
          data-testid="attr1-input"
          placeholder="Digite o primeiro atributo da carta"
        />
      </label>
    );
  }
}
