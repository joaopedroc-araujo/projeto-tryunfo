import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props || {};

    return (
      <form>
        <label>
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            placeholder="Digite o nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label>
          <input
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            placeholder="Digite a descrição da carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label>
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            placeholder="Digite o primeiro atributo da carta"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            placeholder="Digite o segundo atributo da carta"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            placeholder="Digite o terceiro atributo da carta"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label>
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            placeholder="Insira o caminho para imagem da carta"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label>
          Raridade da carta:
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label>
          Essa carta é Super Trunfo?
          {' '}
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="save-button">
          <button
            type="submit"
            data-testid="save-button"
            disabled={ !!isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </label>
      </form>
    );
  }
}
