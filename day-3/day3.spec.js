import {
    getGammaRateAtPosition,
    getGammaRate,
    getEpsilonRateAtPosition,
    getEpsilonRate,
    getCo2ScrubberRating,
    getOxygenGeneratorRating,
} from './day3';
import testInput from './input';
import diagnosticReport from './diagnosticReport';

describe('day3', () => {
    describe('part1', () => {
        describe('getGammaRateAtPosition', () => {
            it('should return the most common digit at the nth position of an array', () => {
                const result = getGammaRateAtPosition(0,testInput);
                expect(result).toEqual(1);
            });
        });
        describe('getEpsilonRateAtPosition', () => {
            it('should return the least common digit at the nth position of an array', () => {
                const result = getEpsilonRateAtPosition(0,testInput);
                expect(result).toEqual(0);
            });
        });
        describe('getGammaRateForData', () => {
            it('should return the gamma rate', () => {
                const result = getGammaRate(testInput);
                expect(result).toEqual(22);
            });
        });
        describe('getEpsilonRateForData', () => {
            it('should return the gamma rate', () => {
                const result = getEpsilonRate(testInput);
                expect(result).toEqual(9);
            });
        });
        describe('execute', () => {
            it('should return the gamma and epsilon rates', () => {
                const gamma = getGammaRate(diagnosticReport);
                const epsilon = getEpsilonRate(diagnosticReport);
                expect(gamma*epsilon).toEqual(2583164);
            });
        });
    });
    describe('part2', () => {
        describe('getOxygenGeneratorRating', () => {
            it('should return the correct value from the test array', () => {
                const result = getOxygenGeneratorRating(testInput);
                expect(result).toEqual(23);
            });
            it('should return the correct value from the real array', () => {
                const result = getOxygenGeneratorRating(diagnosticReport);
                expect(result).toEqual(825);
            });
        });
        describe('getCo2ScrubberRating', () => {
            it('should return the correct value from the test array', () => {
                const result = getCo2ScrubberRating(testInput);
                expect(result).toEqual(10);
            });
            it('should return the correct value from the real array', () => {
                const result = getCo2ScrubberRating(diagnosticReport);
                expect(result).toEqual(3375);
            });
        });
        describe('execute', () => {
            it('should return the correct value from the test array', () => {
                const co2 = getCo2ScrubberRating(testInput);
                const oxygeb = getOxygenGeneratorRating(testInput);
                expect(co2*oxygeb).toEqual(230);
            });
            it('should return the correct value from the real array', () => {
                const co2 = getCo2ScrubberRating(diagnosticReport);
                const oxygeb = getOxygenGeneratorRating(diagnosticReport);
                expect(co2*oxygeb).toEqual('answer');
            });
        });
    });
});
