class PokerHand {

  getOutcome = (cards, bet) => {
    let highCard;
    let scount = 0;
    let value = [];
    let suits = [];
    let result = [];
    let arrOfKinds = [];
    let arrStrFls = [];
    let tresure;
    cards.forEach(card => {
      value.push(card.val)
      value = value.sort((a, b) => b - a)
      suits.push(card.suit)
    })
    for (var i = 0; i < 5; i++) {
      if (value[i] - value[i + 1] === 1) {
        arrStrFls.push(value[i], value[i + 1])
      }
      for (var j = 0; j < 5; j++) {
        if (value[i] === value[j] && j !== i) {
          arrOfKinds.push(value[i], value[j])
        }

        if (suits[i] === suits[j] && j !== i) {
          scount++;
        }
      }
    }

    cards.forEach(card => {
      if (arrStrFls[0] === card.val) {
        arrStrFls[0] = card.rank
      }
      if (arrStrFls[arrStrFls.length - 1] === card.val) {
        arrStrFls[arrStrFls.length - 1] = card.rank
      }
      if (arrOfKinds[0] === card.val) {
        arrOfKinds[0] = card.rank
      }
      if (arrOfKinds[arrOfKinds.length - 1] === card.val) {
        arrOfKinds[arrOfKinds.length - 1] = card.rank
      }
      if (value[0] === card.val) {
        highCard = card.rank
      }
    })

    if (value[0] === 14 && arrStrFls.length === 8 && scount === 20) {
      if (bet === 5) {
        tresure = bet * 1000
      } else {
        tresure = bet * 250
      }
      result.push({
        combs: 'Royal Flush'
      }, {
        ranks: `(${arrStrFls[0]}, ${arrStrFls[arrStrFls.length-1]})`
      }, {
        wins: tresure
      })
    } else if (arrStrFls.length === 8 && scount === 20) {
      tresure = bet * 50
      result.push({
        combs: 'Straight Flush'
      }, {
        ranks: `(${arrStrFls[0]}, ${arrStrFls[arrStrFls.length-1]})`
      }, {
        wins: tresure
      })
    } else if (arrStrFls.length === 8) {
      tresure = bet * 4
      result.push({
        combs: 'Straight'
      }, {
        ranks: `(${arrStrFls[0]}, ${arrStrFls[arrStrFls.length-1]})`
      }, {
        wins: tresure
      })
    } else if (scount === 20) {
      tresure = bet * 6
      result.push({
        combs: 'Flush'
      }, {
        ranks: `(${suits[0]})`
      }, {
        wins: tresure
      })
    } else if (arrOfKinds.length === 0) {
      tresure = bet * 0
      result.push({
        combs: 'High Card'
      }, {
        ranks: `(${highCard})`
      }, {
        wins: tresure
      })
    } else if (arrOfKinds.length === 4) {
      if (arrOfKinds[0] < 11) {
        tresure = bet * 0
      } else {
        tresure = bet * 1
      }
      result.push({
        combs: 'Pair'
      }, {
        ranks: `(${arrOfKinds[0]})`
      }, {
        wins: tresure
      })
    } else if (arrOfKinds.length === 8) {
      tresure = bet * 2
      result.push({
        combs: 'Two Pairs'
      }, {
        ranks: `(${arrOfKinds[0]}, ${arrOfKinds[arrOfKinds.length-1]})`
      }, {
        wins: tresure
      })
    } else if (arrOfKinds.length === 12) {
      tresure = bet * 3
      result.push({
        combs: 'Three of a Kind'
      }, {
        ranks: `(${arrOfKinds[0]})`
      }, {
        wins: tresure
      })
    } else if (arrOfKinds.length === 16) {
      tresure = bet * 9
      result.push({
        combs: 'Full House'
      }, {
        ranks: `(${arrOfKinds[0]}, ${arrOfKinds[arrOfKinds.length-1]})`
      }, {
        wins: tresure
      })
    } else if (arrOfKinds.length === 24) {
      tresure = bet * 25
      result.push({
        combs: 'Four of a Kind'
      }, {
        ranks: `(${arrOfKinds[0]})`
      }, {
        wins: tresure
      })
    }
    return result
  }
}

export default PokerHand;