import { useState } from "react";
import styles from "./CardViewer.module.css";

type Card = {
  id: string;
  content: {
    front: string;
    back: string;
  }
};

type Deck = {
  cards: Array<Card>
};

type CardViewerState = {
  currentId: string;
  side: 0 | 1; // front = 0, back = 1
  deck: Deck;
};

type CardComponentProps = {
  card: Card;
  side: 0 | 1;
  onClick: () => void;
}

const CardComponent = ({ card, side, onClick }: CardComponentProps) => {
  console.log(side);
  return (
    <div className="card" onClick={onClick}>
      <div className={`container side-${side}`}>
        <div className="wrapper">
          {side === 0 ? (
            <div className="main">
              <div className="content">
                {card.content.front}
              </div>
            </div>
          ) : (
            <div className="main">
              <div className="content">
                {card.content.back}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardViewer = ({ deck }: { deck: Deck }) => {
  console.log(deck);

  const [state, setState] = useState<CardViewerState>({
    deck: deck,
    currentId: deck.cards[0]?.id || '',
    side: 0
  });

  const currentCard = state.deck.cards.find((card) => card.id === state.currentId);

  if (!currentCard) {
    return <div className="">No card found</div>;
  }

  const flip = () => {
    console.log("flip");
    setState(prev => ({ ...prev, side: state.side === 0 ? 1 : 0 }));
  }

  return (
    <div className={styles.container}>
      <CardComponent card={currentCard} side={state.side} onClick={flip} />

      <div className="">
        <button
          className=""
          onClick={() => {
            const currentIndex = state.deck.cards.findIndex(c => c.id === state.currentId);
            if (currentIndex > 0) {
              setState({
                ...state,
                currentId: state.deck.cards[currentIndex - 1].id,
                side: 0
              });
            }
          }}
          disabled={state.deck.cards.findIndex(c => c.id === state.currentId) === 0}
        >
          Previous
        </button>

        <button
          className=""
          onClick={flip}
        >
          Flip
        </button>

        <button
          className=""
          onClick={() => {
            const currentIndex = state.deck.cards.findIndex(c => c.id === state.currentId);
            if (currentIndex < state.deck.cards.length - 1) {
              setState({
                ...state,
                currentId: state.deck.cards[currentIndex + 1].id,
                side: 0
              });
            }
          }}
          disabled={state.deck.cards.findIndex(c => c.id === state.currentId) === state.deck.cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
