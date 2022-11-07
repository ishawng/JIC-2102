const Words = {
    1: {
        word: '테니스',
        def:'Noun. Tennis',
        number: 1,
    },
    2: {
        word: '잘',
        def:'Adverb.  Well',
        number: 2,
    },
    3: {
        word: '치다',
        def:'Verb. To play (tennis, table tennis, golf), [Note: not for baseball, softball, volleyball, (ice)hockey, For these sports, use 하다.] ',
        number: 3,
    },
    4: {
        word: '하다',
        def:'Verb.  To do',
        number: 4,
    },
    5: {
        word: '어',
        def:'Interjection.  Oh',
        number: 5,
    },
    6: {
        word: '책',
        def:'Noun. Book',
        number: 6,
    },
    7: {
        word: '읽다',
        def:'Verb.  To read',
        number: 7,
    },
    8: {
        word: '조금',
        def:'Adverb.  A little, a few',
        number: 8,
    },
    9: {
        word: '같이',
        def:'Adverb.  Together',
        number: 9,
    },
    10: {
        word: '좋다',
        def:'Verb.  To be good',
        number: 10,
    },
    11: {
        word: '자주',
        def:'Adverb.  Often',
        number: 11,
    },
    12: {
        word: '남자',
        def:'Noun. Male',
        number: 12,
    },
    13: {
        word: '친구',
        def:'Noun.  Friend',
        number: 13,
    },
    14: {
        word: '오늘',
        def:'Noun. Today',
        number: 14,
    },
    15: {
        word: '15.	저녁',
        def:'Noun. 1. Dinner (Time) / 2. Dinner (Meal)',
        number: 15,
    },
    16: {
        word: '어디',
        def:'Pronoun. Where (What place)',
        number: 16,
    },
    17: {
        word: '기숙사',
        def:'Noun. Dormitory',
        number: 17,
    },
    18: {
        word: '그런데',
        def:'Connective Adverb.  By the way',
        number: 18,
    },
    19: {
        word: '다른 ',
        def:'Adjective. Another',
        number: 19,
    },
    20: {
        word: '약속',
        def:'Noun.  Appointment',
        number: 20,
    },
    21: {
        word: '그럼',
        def:'Adverb.  If that is the case / Then (it does not mean at that time)',
        number: 21,
    },
    22: {
        word: '내일',
        def:'Noun.  Tomorrow',
        number: 22,
    },
    23: {
        word: '시간',
        def:'Noun.  Time',
        number: 23,
    },
};

export function getUnit2Word(wordNumber) {
    return Words[wordNumber];
};
  