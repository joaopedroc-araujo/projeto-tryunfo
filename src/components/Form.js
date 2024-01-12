import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;
    const urlRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

    // console.log(isSaveButtonDisabled);

    const maxAttrPerCard = 90;
    return (
      <form>
        <label>
          Nome da carta:
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            placeholder="Nome da carta"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label>
          <span>Imagem da carta:</span>
          <div>
            <input
              name="cardImage"
              type="text"
              data-testid="image-input"
              placeholder="Insira o caminho para imagem da carta"
              value={ cardImage }
              onChange={ onInputChange }
            />
            { cardImage.length > 0 && !urlRegex.test(cardImage)
              ? (<span>URL inválida</span>) : null }
          </div>
        </label>
        <label>
          Descrição da Carta:
          <input
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            placeholder="Digite a descrição da carta"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label>
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            placeholder="Digite o primeiro atributo da carta"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
          {cardAttr1 > maxAttrPerCard || cardAttr1 < 0
            ? (<div><span>Valor inválido, valor deve ser entre 1 e 90</span></div>)
            : null}
        </label>
        <label>
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            placeholder="Digite o segundo atributo da carta"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
          {cardAttr2 > maxAttrPerCard || cardAttr2 < 0
            ? (<div><span>Valor inválido, valor deve ser entre 1 e 90</span></div>)
            : null}
        </label>
        <label>
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            placeholder="Digite o terceiro atributo da carta"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
          {cardAttr3 > maxAttrPerCard || cardAttr3 < 0
            ? (<div><span>Valor inválido, valor deve ser entre 1 e 90</span></div>)
            : null}
        </label>
        <label>
          Raridade da carta:
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label>
          {hasTrunfo
            ? (<span>Você já tem um Super Trunfo em seu baralho</span>) : (
              <div>
                <span>
                  {' '}
                  Essa carta é Super Trunfo?
                  {' '}
                </span>
                <input
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  onChange={ onInputChange }
                  checked={ cardTrunfo }
                />
              </div>
            )}
        </label>
        <button
          name="isSaveButtonDisabled"
          type="submit"
          data-testid="save-button"
          disabled={ !!isSaveButtonDisabled }
          // onClick={ outraFunçãoDeTeste }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.oneOf(['normal', 'raro', 'muito raro']).isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
