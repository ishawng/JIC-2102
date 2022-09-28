import React, { useState } from 'react'
import { getVocab } from '../../vocabData';
import FlashcardList from './FlashcardList';
import './FlashcardStudyPage.css'


function FlashcardStudyPage() {
  const [cards] = useState(SAMPLE_CARDS)

  return (
    <FlashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = getVocab(1)

export default FlashcardStudyPage;