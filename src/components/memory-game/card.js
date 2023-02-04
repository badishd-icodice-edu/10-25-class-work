import React from 'react'

export default function Card({ symbol, onClick, isFlipped, isMatched }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`} onClick={onClick}>
      {isFlipped || isMatched ? symbol : 'iCodice'}
    </div>
  )
}
