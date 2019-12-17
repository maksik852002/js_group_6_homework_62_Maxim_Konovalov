import React, {Component, Fragment} from 'react';
import NavBar from '../../../components/Ui/NavBar/NavBar';
import Block from '../../../components/PlayGames/FindRing/Block/Block';
import Tries from '../../../components/PlayGames/FindRing/Tries/Tries';
import PlayingField from '../../../components/PlayGames/FindRing/PlayingField/PlayingField';
import Button from '../../../components/Ui/Button/Button';

class FindRing extends Component {
  state = {
    blocks: [],
    tries:0,
    win: false,
  };

  clearState = () => {
    let blocks = [...this.state.blocks];
    blocks = [];
    let tries = this.state.tries;
    tries = 0;
    let win = this.state.win;
    win = false;
    this.setState({blocks,tries,win});
  };

  newGame = () => {
    const index = Math.floor(Math.random() * (36));
    for (var i=0; i < 36; i++) {
      if (i === index) {
        this.state.blocks.push({checked: false, hastlem: true});
      } else {
        this.state.blocks.push({checked: false, hastlem: false});
      }
    }
  };

  winCheck = () => {
    let win = this.state.win;
     this.state.blocks.forEach(block =>{
       if(block.checked&&block.hastlem) {
         alert(`Вы нашли кольцо. Чтобы начать заново нажмите "reset"`);
         win = true;
         this.setState({win});
       }
     })
   };

  clickBlock = i => {
    const blocks = [...this.state.blocks];
    let tries = this.state.tries;
    if (!blocks[i].checked) {
      tries++;
    }
    blocks[i].checked = true;
    this.setState({blocks, tries});
    this.winCheck();
  };

  render = () => {
    if (this.state.blocks.length === 0) {
      this.newGame();
    }
    return (
      <Fragment>
        <NavBar/>
        <div className = "container">
          <PlayingField>
            {this.state.blocks.map((block, i) => (
              this.state.win ?
              <Block
                key={i}
                checked = {block.checked}
                hastlem = {block.hastlem}
              /> :
              <Block
                key={i}
                checked = {block.checked}
                hastlem = {block.hastlem}
                click = {() => this.clickBlock(i)}
              /> 
            ))}
          </PlayingField>
          <Tries
            tries = {this.state.tries}
          />
          <div className="d-flex justify-content-center">
            <Button
              click = {this.clearState}
              type = 'button'
              addClass = 'secondary'
              label='Reset'
            />
          </div>
        </div>
      </Fragment>
    )
  }
};

export default FindRing;