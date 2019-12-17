import React, {Component, Fragment} from 'react';
import NavBar from '../../../components/Ui/NavBar/NavBar';
import Card from '../../../components/PlayGames/Poker/Card/Card';
import CardDeck from '../../../components/PlayGames/Poker/CardDeck/CardDeck';
import PokerHand from '../../../components/PlayGames/Poker/PokerHand/PokerHand';
import Table from '../../../components/PlayGames/Poker/Table/Table';
import './cards.css';
import './Poker.css';

const deck = new CardDeck();
const hand = new PokerHand();

const combination  = [
  {name:'Royal Flush', mltp:250},
  {name:'Straight Flush', mltp:50},
  {name:'Four of a Kind', mltp:25},
  {name:'Full House', mltp:9},
  {name:'Flush', mltp:6},
  {name:'Straight', mltp:4},
  {name:'Three of a Kind', mltp:3},
  {name:'Two Pairs', mltp:2},
  {name:'Pair', mltp:1}
]

class Poker extends Component {
  
  state = {
    cards:[],
    combs:'',
    ranks:'',
    bet:0,
    wins:0,
    cash:100,
    isDisabled:false,
  }
  
  componentDidMount = () => {
     this.refreshState();
  }

  changeCard = () => {
    let isDisabled = this.state.isDisabled;
    isDisabled = false;
    let bet = this.state.bet;
    let cash = this.state.cash;
    const cards = this.state.cards.map(card => {
      if(card.checked) {
        let replace = deck.getCard();
        card = replace;
      }
      return card;
    })
    let result = hand.getOutcome(cards, bet) 
    let combs = result[0].combs;
    let ranks = result[1].ranks;
    let wins= result[2].wins;
    cash += wins
    this.setState({cards,combs,bet,ranks,wins,cash,isDisabled});
  }

  refreshState = (myBet) => {
    let isDisabled = this.state.isDisabled;
    let cash = this.state.cash;
    let check = true;
    let bet = this.state.bet; 
    let combs = this.state.combs;
    let cards = [...this.state.cards];
    let wins = this.state.wins;
    if(myBet > 0) {
 
    isDisabled = true;
    }
    if (myBet !== undefined) {
      check = false;
      cash -= myBet
      combs = 'You can replace 1 to 5 cards if you need'
      wins = 0
    }
    if(myBet === undefined) {
      myBet = 0
    }
    deck.newDeck(check);
      cards = deck.getCards(5);
      bet = myBet
      this.setState({cards,bet,cash,combs,wins,isDisabled});
  }

  ifChecked = (e, i) => {
    let bet = this.state.bet;
    const cards = [...this.state.cards]
    if (e.target.checked && bet > 0) {
     cards[i].add = 'back'
     cards[i].checked = true;
    } else {
     cards[i].add = '';
     cards[i].checked = false;
    }
    this.setState({cards});
  }

  render = () => {
    return (
      <Fragment>
        <NavBar/>
        <div className='table'>
          <div className="container text-center mt-4">
            <div className="d-flex justify-content-center">
            <table>
              <tbody>
                {combination.map((element, i) => (
                  <Table
                    key = {i}
                    name={element.name}
                    mltp={element.mltp}
                    combs= {this.state.combs}
                    bet = {this.state.bet}
                  />
                ))}
              </tbody>
            </table>
            </div>
            <div>
            <h3>{this.state.combs} <i>{this.state.ranks}</i></h3>
            </div>
            <div className="playingCards faceImages">
              {this.state.cards.map((card,i) => (
                <Card 
                key = {i}
                suit={card.suit} 
                rank={card.rank}
                add={card.add} 
                check={card.checked}
                back = {(e) => this.ifChecked(e, i)}/>
              ))}
                <div className='d-flex justify-content-around'>
                <p>Your bid: {this.state.bet}$</p> 
                <p>Winning: {this.state.wins}$</p>
                <p>Your cash: {this.state.cash}$</p>
                </div>
                <div>
                <h4>Make your bet</h4>
                <div className="row justify-content-center">
                  <button onClick = {() => this.refreshState(1)} disabled={this.state.isDisabled}>1$</button>
                  <button onClick = {() => this.refreshState(2)} disabled={this.state.isDisabled}>2$</button>
                  <button onClick = {() => this.refreshState(3)} disabled={this.state.isDisabled}>3$</button>
                  <button onClick = {() => this.refreshState(4)} disabled={this.state.isDisabled}>4$</button>
                  <button onClick = {() => this.refreshState(5)} disabled={this.state.isDisabled}>5$</button>
                </div>
              </div>
            </div>
            <button onClick = {this.changeCard} disabled={!this.state.isDisabled}>Deal Draw</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Poker;