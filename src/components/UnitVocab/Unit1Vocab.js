const Words = {
    1: {
        word: '전공',
        def:'Noun.  Major',
        number: 1,
    },
    2: {
        word: '일',
        def:'Noun. Work',
        number: 2,
    },
    3: {
        word: '학년',
        def:'Noun.  School year',
        number: 3,
    },
    4: {
        word: '아',
        def:'Interjection. Oh!, Ah!, Alas!',
        number: 4,
    },
    5: {
        word: '컴퓨터',
        def:'Noun.  Computer',
        number: 5,
    },
    6: {
        word: '정말',
        def:'Adverb.  Really',
        number: 6,
    },
};

export function getUnit1Word(wordNumber) {
    return Words[wordNumber];
};
