import React from 'react';
import { useLocation } from 'react-router-dom';
import { getVocab } from '../../vocabData';
import Flashcard from './Flashcard';
import './FlashcardStudyPage.css';


function FlashcardStudyPage() {
    const location = useLocation();
    const unit = location.state;
    const cards = getVocab(unit.number);

    return (
        <div id='flashcard-container'>
            {cards.map(flashcard => {
                return <Flashcard flashcard={flashcard} />
            })}
        </div>
    );
}

export default FlashcardStudyPage;