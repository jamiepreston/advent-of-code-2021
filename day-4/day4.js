export const decodeCard = (card) =>
    card.split('\n').map(row=> row
        .split(' ')
        .filter(char => char !== '')
        .map(num => Number(num)));

export const markCard = (card, num) =>
    card.map(row => row.map(n => n !== num ? n : 'X'))

const getPuzzleOutput = (card, number) => {
    const total = card.reduce((acc, row) => {
        const rowTotal = row.reduce((rowAcc, n) =>
                n !== 'X' ? rowAcc+n : rowAcc
            , 0);
        return acc+rowTotal;
    }, 0);
    console.log(total, number)
    return total * number;
}

export const cardHasWon = (card) => {
    const rowWin = card.find((row) => row.every(n => n === 'X')) !== undefined;
    const colWin = card[0].reduce((acc,row,i) =>
        card.every(row => row[i] === 'X')
            ? true
            : acc
    , false);
    return rowWin || colWin;
};

export const playBingo = (cards, numbers, decodedCardsAr = []) => {
    const decodedCards = decodedCardsAr.length === 0
        ? cards.map(decodeCard)
        : decodedCardsAr;
    const [currentNumber, ...remainingNumbers] = numbers;
    const markedCards = decodedCards.map(card => markCard(card, currentNumber));
    const winningCard = markedCards.find(cardHasWon)

    return winningCard !== undefined
        ? getPuzzleOutput(winningCard, currentNumber)
        : playBingo(cards, remainingNumbers, markedCards)
}

export const loseBingo = (cards, numbers, decodedCardsAr = []) => {
    const decodedCards = decodedCardsAr.length === 0
        ? cards.map(decodeCard)
        : decodedCardsAr;
    const [currentNumber, ...remainingNumbers] = numbers;
    const markedCards = decodedCards.map(card => markCard(card, currentNumber));
    const remainingCards = markedCards.filter(card => !cardHasWon(card))

    return remainingCards.length === 0
        ? getPuzzleOutput(markedCards[0], currentNumber)
        : loseBingo(cards, remainingNumbers, remainingCards)
}
