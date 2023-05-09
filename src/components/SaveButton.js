import React, { Component } from 'react';

export default class SaveButton extends Component {
  render() {
    return (
      <label htmlFor="save-button">
        <button type="submit" data-testid="save-button">Salvar</button>
      </label>
    );
  }
}
