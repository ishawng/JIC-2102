/*
    credit to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for shuffleArray function
*/
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

/*
    credit to https://www.sitepoint.com/delay-sleep-pause-wait/ for sleep function
*/
export function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};