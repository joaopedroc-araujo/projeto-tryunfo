import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardInfo: {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    },
    cardList: [],
    hasTrunfo: false,
  };

  onInputChange = (event) => {
    // console.log(this);
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked : value;

    this.setState((prevState) => {
      const cardInfo = {
        ...prevState.cardInfo,
        [name]: valueField,
      };

      const maxAttrPerCard = 90;
      const maxAttrAdd = 210;

      const filledCamps = cardInfo.cardName
        && cardInfo.cardDescription
        && cardInfo.cardAttr1
        && cardInfo.cardAttr2
        && cardInfo.cardAttr3
        && cardInfo.cardImage;

      const filledAttr = parseInt(cardInfo.cardAttr1, 10) >= 0
      && parseInt(cardInfo.cardAttr1, 10) <= maxAttrPerCard
        && parseInt(cardInfo.cardAttr2, 10) >= 0
        && parseInt(cardInfo.cardAttr2, 10) <= maxAttrPerCard
        && parseInt(cardInfo.cardAttr3, 10) >= 0
        && parseInt(cardInfo.cardAttr3, 10) <= maxAttrPerCard
        && parseInt(cardInfo.cardAttr1, 10)
        + parseInt(cardInfo.cardAttr2, 10)
          + parseInt(cardInfo.cardAttr3, 10)
          <= maxAttrAdd;

      const isSaveButtonDisabled = !filledCamps || !filledAttr;

      return {
        cardInfo: {
          ...cardInfo,
          isSaveButtonDisabled,
        },
      };
    });
    // console.log(this);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardInfo, cardList, hasTrunfo } = this.state;
    const changedCards = {
      cardName: cardInfo.cardName,
      cardDescription: cardInfo.cardDescription,
      cardAttr1: cardInfo.cardAttr1,
      cardAttr2: cardInfo.cardAttr2,
      cardAttr3: cardInfo.cardAttr3,
      cardImage: cardInfo.cardImage,
      cardRare: cardInfo.cardRare,
      cardTrunfo: cardInfo.cardTrunfo,
      cardId: cardList.length + 1,
    };

    // console.log(changeCard.hasTrunfo);
    const newCardList = [...cardList, changedCards];

    this.setState({
      cardInfo: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      },
      cardList: newCardList,
      hasTrunfo: hasTrunfo || cardInfo.cardTrunfo,
    });
    // console.log(cardInfo.hasTrunfo);
  };

  handleDeleteButtonClick = (cardId) => {
    const { cardList } = this.state;
    const filterAllCards = cardList.filter((card) => card.cardId !== cardId);
    // console.log(filterAllCards);
    const cardListHasTrunfo = filterAllCards.some((card) => card.cardTrunfo === true);
    // console.log(cardListHasTrunfo);

    this.setState({
      cardList: filterAllCards,
      hasTrunfo: cardListHasTrunfo,
    });
  };

  render() {
    const { cardInfo, cardList, hasTrunfo } = this.state;
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   isSaveButtonDisabled,
    // } = cardInfo;
    // console.log(this);
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          // cardName="Nome da carta"
          // cardDescription="Descrição da carta"
          // cardAttr1={ cardAttr1 }
          // cardAttr2={ cardAttr2 }
          // cardAttr3={ cardAttr3 }
          // cardImage={ cardImage }
          // cardRare={ cardRare }
          // cardTrunfo={ cardTrunfo }
          // isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          { ...cardInfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...cardInfo }
          cardInfo={ cardInfo }
        />
        <div>
          <ul>
            {cardList.map((card) => (
              <li key={ card.cardId }>
                <Card { ...card } />
                <button
                  data-testid="delete-button"
                  onClick={ () => this.handleDeleteButtonClick(card.cardId) }
                >
                  Excluir
                </button>
              </li>))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
