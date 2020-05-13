class Deck {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
    }
    generate_deck() {
        const card = (suit, value) => {
            this.name = value + ' of ' + suit
            this.suit = suit
            this.value = value
            return {
                name: this.name, suit:
                    this.suit, value: this.value
            }
        }
        const values = ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', 'J', 'Q', 'K'];
        const suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];

        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.deck.push(card(suits[s], values[v]))
            }
        }
    }

    print_deck() {
        if (this.deck.length === 0) {
            console.log('the deck has not been generated');
        } else {
            for (let c = 0; c < this.deck.length; c++) {
                console.log(this.deck[c]);
            }
        }
    }

    shuffle_deck() {
        let current_idx = this.deck.length;
        let temp_val;
        let random_idx;
        while (0 != current_idx) {
            random_idx = Math.floor(Math.random() * current_idx);
            current_idx -= 1;
            temp_val  = this.deck[current_idx];
            this.deck[current_idx] = this.deck[random_idx];
            this.deck[random_idx] = temp_val;
        }
    }

    deal() {
        let dealt_cards = this.deck.shift();
        this.dealt_cards.push(dealt_cards);
        return dealt_cards;
    }

    replace() {
        this.deck.unshift(this.dealt_cards.shift());
    }

    clear_deck() {
        this.deck = [];
    }
}


const deck = new Deck();
deck.generate_deck();
deck.shuffle_deck();
console.log(deck.deal());
