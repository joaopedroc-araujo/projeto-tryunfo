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
    const changeCard = {
      cardName: cardInfo.cardName,
      cardDescription: cardInfo.cardDescription,
      cardAttr1: cardInfo.cardAttr1,
      cardAttr2: cardInfo.cardAttr2,
      cardAttr3: cardInfo.cardAttr3,
      cardImage: cardInfo.cardImage,
      cardRare: cardInfo.cardRare,
      cardTrunfo: cardInfo.cardTrunfo,
    };

    // console.log(changeCard.hasTrunfo);
    const newList = [...cardList, changeCard];

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
      cardList: newList,
      hasTrunfo: hasTrunfo || cardInfo.cardTrunfo,
    });
    // console.log(cardInfo.hasTrunfo);
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
          hasTrunfo={ hasTrunfo }
          cardInfo={ cardInfo }
          cardList={ cardList }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          verifyTrunfo={ this.verifyTrunfo }
        />
        <Card
          { ...cardInfo }
          cardInfo={ cardInfo }
        />
        <div>
          <ul>
            {cardList.map((card) => (
              <li key={ card.cardName }>
                <Card { ...card } />
              </li>))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
