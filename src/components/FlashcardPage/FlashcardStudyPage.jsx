import React, { useState } from 'react'
import FlashcardList from './FlashcardList';
import './FlashcardStudyPage.css'

function FlashcardStudyPage() {
  const [cards] = useState(SAMPLE_CARDS)

  return (
    <FlashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    english: 'name',
    korean: '이름',
  },
  {
    english: 'truly, really, very',
    korean: '참',
  },
  {
    english: 'science',
    korean: '사이언스',
  }
]

export default FlashcardStudyPage;