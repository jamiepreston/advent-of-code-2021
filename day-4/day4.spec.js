import {
    decodeCard,
    markCard,
    playBingo,
    loseBingo, cardHasWon,
} from './day4';
import {
    numbers as testNumbers,
    cards as testCards,
} from './testBingoCards';
import {
    cards,
    numbers,
} from './realBingoCards';

describe('day4', () => {
    describe('decodeCard', () => {
        it('should return the card as an array', () => {
            const card = testCards[0];
            const result = decodeCard(card);
            expect(result).toEqual([
                [22,13,17,11,0],
                [8,2,23,4,24],
                [21,9,14,16,7],
                [6,10,3,18,5],
                [1,12,20,15,19,],
            ]);
        });
    });

    describe('markCard', () => {
        it('should mark the number from the card', () => {
            const card = [
                [22,13,17,11,0],
                [8,2,23,4,24],
                [21,9,14,16,7],
                [6,10,3,18,5],
                [1,12,20,15,19,],
            ];
            const number = testNumbers[0]; // 7
            const result = markCard(card, number);
            expect(result).toEqual([
                [22,13,17,11,0],
                [8,2,23,4,24],
                [21,9,14,16,'X'],
                [6,10,3,18,5],
                [1,12,20,15,19,],
            ]);
        });
    });



    describe('cardHasWon', () => {
        it('should return true for a row win', () => {
            const card = [
                ['X','X','X','X','X'],
                [8,2,23,4,24],
                [21,9,14,16,7],
                [6,10,3,18,5],
                [1,12,20,15,19,],
            ];
            const number = testNumbers[0]; // 7
            const result = cardHasWon(card);
            expect(result).toBe(true);
        });
        it('should return true for a column win', () => {
            const card = [
                ['X','X',17,11,0],
                [8,'X',23,4,24],
                [21,'X','X',16,7],
                [6,'X',3,18,5],
                [1,'X',20,'X',19,],
            ];
            const result = cardHasWon(card);
            expect(result).toBe(true);
        });
        it('should return false for a non winning card', () => {
            const card = [
                [22,13,17,11,0],
                [8,2,23,4,24],
                [21,9,14,16,'X'],
                [6,10,3,18,5],
                [1,12,20,15,19,],
            ];
            const result = cardHasWon(card);
            expect(result).toBe(false);
        });
    });



    describe('part1', () => {
        describe('playBingo', () => {
            it('should return the puzzle output for test', () => {
                const result = playBingo(testCards, testNumbers);
                expect(result).toEqual(4512);
            });
            xit('should return the puzzle output for real data', () => {
                const result = playBingo(cards, numbers);
                expect(result).toEqual('solution');
            });
        });
    });
    describe('part2', () => {
        describe('loseBingo', () => {
            it('should return the puzzle output for test', () => {
                const result = loseBingo(testCards, testNumbers);
                expect(result).toEqual(1924);
            });
            it('should return the puzzle output for real data', () => {
                const result = loseBingo(cards, numbers);
                expect(result).toEqual('solution');
            });
        });
    });
});
