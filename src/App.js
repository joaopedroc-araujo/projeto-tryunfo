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
    console.log('clicou');
    const { cardInfo, cardList } = this.state;
    const changeCard = {
      cardName: cardInfo.cardName,
      cardDescription: cardInfo.cardDescription,
      cardAttr1: cardInfo.cardAttr1,
      cardAttr2: cardInfo.cardAttr2,
      cardAttr3: cardInfo.cardAttr3,
      cardImage: cardInfo.cardImage,
      cardRare: 'normal',
      cardTrunfo: false,
    };

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
    });
  };
  // outraFunçãoDeTeste = () => {
  //   console.log('clicou');
  // };

  render() {
    const { cardInfo, cardList } = this.state;
    // console.log(this);
    console.log(cardList);
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardInfo={ cardInfo }
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
