const QUESTIONS = {
    1: [
        {
            english: '(someone/something is)  pretty',
            korean: '예뻐요',
        },
        {
            english: 'How are you?, Hello, Good morning/afternoon/evening.',
            korean: '안녕하세요',
        },
        {
            english: 'Thank you.',
            korean: '고마워요',
        },
        {
            english: 'What is?',
            korean: '~이/가 뭐예요?',
        },
        {
            english: 'be not, no',
            korean: '아니에요',
        },
        {
            english: 'Subject Marker',
            korean: '이/가',
        },
        {
            english: 'Identity Marker',
            korean: '이에요/예요',
        },
        {
            english: 'Topic Marker',
            korean: '도',
        },
    ],
    2: [
        {
            english: 'Location Marker',
            korean: '에',
        },
        {
            english: 'Time Marker',
            korean: '에',
        },
        {
            english: 'Contrast Marker',
            korean: '은/는',
        },
        {
            english: 'How to express possession in Korean',
            korean: '~은/는 ~이/가 있다/없다',
        },
        {
            english: 'Boundary Marker',
            korean: '에서',
        },
        {
            english: 'Polite Statement/Question Endings',
            korean: '어요/아요/해요',
        },
        {
            english: 'Object Marker',
            korean: '을/를',
        },
    ],
    3: [
        {
            english: 'Ending Asking the listener their Opinion',
            korean: 'ㄹ/을까요',
        },
        {
            english: 'Like or Dislike',
            korean: '~이/가 좋다/싫다',
        },
        {
            english: 'Possession Marker',
            korean: '의',
        },
        {
            english: 'Casual ending',
            korean: '아/어/해',
        },
        {
            english: 'Casually and intimately toward your friend',
            korean: '~아/야',
        },
        {
            english: 'Your first negation',
            korean: '~이/가 아니다',
        },
    ],
    4: [
        {
            english: 'Would like to ~',
            korean: '~고 싶다',
        },
        {
            english: 'Negation adverb',
            korean: '안',
        },
        {
            english: 'ending indicating the 1st person and their intention',
            korean: '(으)ㄹ래요',
        },
        {
            english: 'Humbly referring to yourself',
            korean: '제가',
        },
        {
            english: 'Express your purpose of visits',
            korean: '(으)러 가다/오다',
        },
        {
            english: 'Casual suggestion ending',
            korean: '~자',
        },
    ],
    5: [
        {
            english: 'Try to do ~',
            korean: '아/어/해 보다',
        },
        {
            english: 'Past-tense Markers',
            korean: '았/었/했',
        },
        {
            english: 'Notifying the 1st person of their intention',
            korean: 'ㄹ/을게요',
        },
        {
            english: 'Confirming ending',
            korean: '~지요?',
        },
        {
            english: 'Counting & Counters',
            korean: '개, 잔, ...',
        },
        {
            english: 'Native Numbers',
            korean: '한, 두, 세, 네, 다섯, 여섯, 일곱, 여덟, 아홉, 열...',
        },
    ],
    6: [
        {
            english: 'Shortened Forms',
            korean: '난/넌/전',
        },
        {
            english: 'As you may know, ~ that is why',
            korean: '~잖아요',
        },
        {
            english: 'Position Words:',
            korean: '앞, 뒤, 옆, 위, 아래, ...',
        },
        {
            english: 'Intimately & Casually referring to someone',
            korean: '~이',
        },
        {
            english: 'Days of the Week',
            korean: '월, 화, 수, 목, 금, 토, 일',
        },
    ],
};

export function getQuestion(unitNumber) {
    return QUESTIONS[unitNumber];
};