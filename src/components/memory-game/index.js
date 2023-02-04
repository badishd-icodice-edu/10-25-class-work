import React, { useRef, useState } from 'react'
import Card from './card'
import './index.css'

const MemoryGame = () => {
  const player1TurnRef = useRef(true) 
  const [player1Turn, setPlayer1Turn] = useState(true)
  const [flippedSymbols, setFlippedSymbols] = useState([])
  const [currentTurnCards, setCurrentTurnCards] = useState({})
  const [scores, setScores] = useState({
    [player1]: 0,
    [player2]: 0,
  })
  const [winner, setWinner] = useState(null)
  const [shuffledCards, setShuffledCards] = useState(randomizeArray())

  const shuffleCards = () => {
    setShuffledCards(randomizeArray())
    setWinner(null)
    setFlippedSymbols([])
    setScores({ [player1]: 0, [player2]: 0 })
  }

  const revealCards = () => {
    setFlippedSymbols(cards)
    setWinner('draw')
  }

  const onCardClick = (cardSymbol, cardLoc) => {
    setCurrentTurnCards((curr) => ({ ...curr, [cardLoc]: cardSymbol }))
    const currFlippedSymbols = Object.values(currentTurnCards)
    if (currFlippedSymbols.length === 1) {
      setTimeout(() => {
        if (currFlippedSymbols[0] !== cardSymbol) {
          player1TurnRef.current = !player1TurnRef.current
          setCurrentTurnCards([])
          // setPlayer1Turn((curr) => !curr)
        } else {
          const [currPlayer, otherPlayer] = player1TurnRef.current ? [player1, player2] : [player2, player1]
          setFlippedSymbols((curr) => [...curr, cardSymbol])
          setScores((curr) => ({ ...curr, [currPlayer]: curr[currPlayer] + 1 }))
          setCurrentTurnCards({})

          if (flippedSymbols.length === cards.length - 1)
            setWinner(scores[currPlayer] + 1 === scores[otherPlayer] ? 'draw' : currPlayer)
        }
      }, 750)
    }
  }

  return (
    <div className="deck">
      <div className="players">
        <span className={player1TurnRef.current ? 'active-turn' : ''}>
          Player {player1}: {scores[player1]}
        </span>
        {winner && (winner === 'draw' ? '===' : winner === player1 ? '<--' : '-->')}
        <span className={player1TurnRef.current ? '' : 'active-turn'}>
          Player {player2}: {scores[player2]}
        </span>
      </div>
      <div className="deck-cards">
        {shuffledCards.map((symbol, cardIdx) => (
          <Card
            symbol={symbol}
            key={cardIdx}
            onClick={() =>
              Object.entries(currentTurnCards).length < 2 &&
              !flippedSymbols.includes(symbol) &&
              onCardClick(symbol, cardIdx)
            }
            isFlipped={currentTurnCards[cardIdx] ? true : false}
            isMatched={flippedSymbols.includes(symbol)}
          />
        ))}
      </div>
      <div className="footer">
        <button onClick={revealCards}>Reveal Cards</button>
        <button onClick={shuffleCards}>Shuffle/Restart</button>
      </div>
    </div>
  )
}

export default MemoryGame

const cards = [
  'Anar',
  'Dee',
  'Jaagii',
  'Jamiya',
  'Khuluguu',
  'Mandahaa',
  'Meg',
  'Muug',
  'Tsatsa',
  'Ziggy',
  'Zoe',
  'Sophie',
]

const randomizeArray = () => [...cards, ...cards].sort(() => Math.random() - 0.5)

const player1 = 'Badi'
const player2 = 'Jaagii'
