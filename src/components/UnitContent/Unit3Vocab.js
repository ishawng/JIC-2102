const Words = {
    1: {
        word: '먹다',
        def:'Verb.  To eat',
        number: 1,
    },
    2: {
        word: '학교',
        def:'Noun. School',
        number: 2,
    },
    3: {
        word: '식당 ',
        def:'Noun.  Restaurant',
        number: 3,
    },
    4: {
        word: '하고',
        def:'Post-positional affix.  With ',
        number: 4,
    },
    5: {
        word: '가다',
        def:'Verb.  To go',
        number: 5,
    },
    6: {
        word: '음',
        def:'Interjection.  Um',
        number: 6,
    },
    7: {
        word: '어때(요)?',
        def:'Verb phrase.  How about ~?',
        number: 7,
    },
    8: {
        word: '왜',
        def:'Adverb.  Why?',
        number: 8,
    },
    9: {
        word: '이/가 싫다',
        def:'Verb.  To hate / To dislike  (Must use the subject marker before!!!)',
        number: 9,
    },
    10: {
        word: '맛 ',
        def:'Noun.  Taste / Flavor',
        number: 10,
    },
    11: {
        word: '김치',
        def:'Noun. Kimchi (Traditional Korean food, fermented spicy cabbage)  ',
        number: 11,
    },
    12: {
        word: '한국',
        def:'Noun.  Korea',
        number: 12,
    },
    13: {
        word: '거기(여기, 저기) ',
        def:'Noun. There (here, there over there) (That place, this place, that place over there) ',
        number: 13,
    },
    14: {
        word: '음식 ',
        def:'Noun.  Food',
        number: 14,
    },
    15: {
        word: '데이트',
        def:'Noun. 1. Dinner (Time) / 2. Dinner (Meal)',
        number: 15,
    },
    16: {
        word: '하다',
        def:'Verb. To date',
        number: 16,
    },
    17: {
        word: '이/가 아니다',
        def:'Verb.  To be not (used to negate someones identity.  Note that the subject marker, 이 or 가 is used before). ',
        number: 17,
    },
    18: {
        word: '인사',
        def:'Noun. Greeting',
        number: 18,
    },
    19: {
        word: '내',
        def:'Possessive Pronoun.   My',
        number: 19,
    },
    20: {
        word: '제',
        def:'Possessive Pronoun.  Humble form of 내. My',
        number: 20,
    },
    21: {
        word: '그냥',
        def:'Adverb.  Just, merely, simply',
        number: 21,
    },
    22: {
        word: '첫',
        def:'Adjective.  First ',
        number: 22,
    },
    23: {
        word: '빨리',
        def:'Adverb.  Hurriedly / In a hurried manner, Fast',
        number: 23,
    },
};

export function getUnit2Word(wordNumber) {
    return Words[wordNumber];
};
  
