import {
    decodeInput,
    mapVentLocations,
    findBoundaries,
    getCoordsForLocation,
    findOverlaps,
} from './day5';
import testVentLocations from './testVentLocations';
import realVentLocations from './realVentLocations';
const decodedInput = [
    [[0,9],[5,9]],
    [[8,0],[0,8]],
    [[9,4],[3,4]],
    [[2,2],[2,1]],
    [[7,0],[7,4]],
    [[6,4],[2,0]],
    [[0,9],[2,9]],
    [[3,4],[1,4]],
    [[0,0],[8,8]],
    [[5,5],[8,2]],
];

describe('day5', () => {
    describe('decodeInput', () => {
        it('should return the input as an array', () => {
            const result = decodeInput(testVentLocations);
            expect(result).toEqual(decodedInput);
        });
    });

    describe('getCoordsForLocation', () => {
        it('should return an array of coords for a vent location', () => {
            const location = [[7,0],[7,4]];
            const result = getCoordsForLocation(location);
            expect(result).toEqual(['7,0','7,1','7,2','7,3','7,4']);
        });
        it('should return an array of coords for a vent location', () => {
            const location = [[2,2],[2,1]];
            const result = getCoordsForLocation(location);
            expect(result).toEqual(['2,2','2,1']);
        });
        it('should return an array of coords for a vent location', () => {
            const location = [[9,4],[3,4]];
            const result = getCoordsForLocation(location);
            expect(result).toEqual(['9,4','8,4','7,4','6,4','5,4','4,4','3,4']);
        });
        it('should map diagonals', () => {
            const location = [[0,4],[4,0]];
            const result = getCoordsForLocation(location);
            expect(result).toEqual(['0,4','1,3','2,2','3,1','4,0']);
        });
    });

    describe('findOverlaps', () => {
        it('should return the number of overlapping vents', () => {
            const result = findOverlaps(testVentLocations);
            expect(result).toEqual(12);
        });
        xit('should return the number of overlapping vents', () => {
            const result = findOverlaps(realVentLocations);
            expect(result).toEqual('Puzzle output');
        });
    });

});
