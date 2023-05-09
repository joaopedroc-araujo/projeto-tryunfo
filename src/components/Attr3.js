import React, { Component } from 'react';

export default class Attr3 extends Component {
  render() {
    return (
      <label>
        <input
          type="number"
          data-testid="attr3-input"
          placeholder="Digite o terceiro atributo da carta"
        />
      </label>
    );
  }
}
