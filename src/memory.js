class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards(cards);
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }

    return this.cards;

    // if (!this.cards) {  //my implementation doesn't shuffle the cards well
    //   return undefined;
    // }

    // for (
    //   let elementIndex = this.cards.length - 1;
    //   elementIndex > 0;
    //   elementIndex--
    // ) {
    //   const randomIndex = Math.floor(Math.random() * (elementIndex + 1));
    //   [this.cards[elementIndex], this.cards[randomIndex]] = [
    //     this.cards[randomIndex],
    //     this.cards[elementIndex],
    //   ];
    //   const shuffledCards = this.cards.slice();
    //   return shuffledCards;
    // }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (!this.cards) {
      return false;
    }
    const pairsTotal = this.cards.length / 2;
    if (this.pairsGuessed === pairsTotal) {
      return true;
    } else {
      return false;
    }
  }
}
