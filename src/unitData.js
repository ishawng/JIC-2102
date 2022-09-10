const UNITS = {
    1: {
        name: 'Unit 1 이름이 참 예뻐요.',
        number: 1,
    },
    2: {
        name: 'Unit 2 남자친구가 있어요?',
        number: 2,
    },
    3: {
        name: 'Unit 3 같이 저녁을 먹을까요?',
        number: 3,
    },
    4: {
        name: 'Unit 4 마트에 가요.',
        number: 4,
    },
    5: {
        name: 'Unit 5 눈꽃빙수를 먹어 볼게요.',
        number: 5,
    },
    6: {
        name: 'Unit 6 주말에 같이 놀러 갈래요?',
        number: 6,
    },
};

export function getUnit(unitNumber) {
    return UNITS[unitNumber];
};