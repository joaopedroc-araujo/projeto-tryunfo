import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import logo from './assets/tryunfo.svg';

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
    filters: {
      name: '',
      rarity: 'todas',
      isSuperTrunfo: false,
    },
  };

  componentDidMount() {
    const savedCardList = localStorage.getItem('cardList');

    if (savedCardList) {
      const parsedCardList = JSON.parse(savedCardList);
      const hasSuperTrunfo = parsedCardList.some((card) => card.cardTrunfo);

      this.setState({
        cardList: parsedCardList,
        hasTrunfo: hasSuperTrunfo,
      });
    }
  }

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
    localStorage.setItem('cardList', JSON.stringify(newCardList));
    // console.log(cardInfo.hasTrunfo);
  };

  handleDeleteButtonClick = (cardId) => {
    const { cardList } = this.state;
    const filterAllCards = cardList.filter((card) => card.cardId !== cardId);
    const cardListHasTrunfo = filterAllCards.some((card) => card.cardTrunfo === true);

    this.setState({
      cardList: filterAllCards,
      hasTrunfo: cardListHasTrunfo,
    }, () => {
      localStorage.setItem('cardList', JSON.stringify(filterAllCards));
    });
  };

  handleNameChange = (event) => {
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        name: event.target.value,
      },
    });
    // console.log(filters.name);
  };

  handleRarityChange = async (event) => {
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        rarity: event.target.value,
      },
    });
    // console.log(filters.rarity);
  };

  handleSuperTrunfoChange = (event) => {
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        isSuperTrunfo: event.target.checked,
      },
    });
    // console.log(filters.isSuperTrunfo);
  };

  render() {
    const { cardInfo, cardList, hasTrunfo, filters } = this.state;
    // console.log(isSaveButtonDisabled);
    const filteredCardList = cardList.filter((card) => {
      const matchesName = card.cardName.includes(filters.name);
      const matchesRarity = filters
        .rarity === 'todas' || card.cardRare === filters.rarity;
      const matchesSuperTrunfo = !filters.isSuperTrunfo || card.cardTrunfo;

      return matchesName && matchesRarity && matchesSuperTrunfo;
    });
    // console.log(filters);

    return (
      <div>
        <header>
          <img
            src={ logo }
            alt="Tryunfo"
            className="absolute top-[76px] left-[387.92px] w-[504.31px] h-[302px]"
          />
        </header>
        <div
          className="relative w-full h-[721px] text-left text-9xl
            text-mediumseagreen font-epilogue"
          style={ { display: 'flex', justifyContent: 'space-around' } }
        >
          <Form
            className="[border:none] [outline:none] bg-[transparent] absolute top-[0px] left-[0px]"
            type="text"
            hasTrunfo={ hasTrunfo }
            { ...cardInfo }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...cardInfo }
            cardInfo={ cardInfo }
          />
        </div>
        <div>
          <h2>Cartas Cadastradas</h2>
          <div>
            <input
              type="search"
              placeholder="Digite o nome da carta"
              onChange={ this.handleNameChange }
            />
            <select onChange={ this.handleRarityChange }>
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
            <span>Super Trunfo</span>
            <input type="checkbox" onChange={ this.handleSuperTrunfoChange } />
          </div>
          <ul>
            {filteredCardList.length === 0 && <p>Nenhuma carta encontrada</p>}
            {filteredCardList.map((card) => (
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
      </div>
    );
  }
}

export default App;
