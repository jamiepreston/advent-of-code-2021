const getOsAndIs = (pos, input) =>
    input.reduce((acc, cur) => {
        return [
            (cur[pos] === '0' ? acc[0] + 1 : acc[0]),
            (cur[pos] === '1' ? acc[1] + 1 : acc[1]),
        ]
    }, [0,0]);

export const getGammaRateAtPosition = (pos, input) => {
    const [os, is] = getOsAndIs(pos, input)
    return os > is ? 0 : 1;
}

export const getEpsilonRateAtPosition = (pos, input) => {
    const [os, is] = getOsAndIs(pos, input)
    return os < is ? 0 : 1;
}

export const getGammaRate = (input) => {
    const binary = [...input[0]].map((cur,index) =>
        getGammaRateAtPosition(index, input)
    ).join('');
    return parseInt(binary, 2);
}

export const getEpsilonRate = (input) => {
    const binary = [...input[0]].map((cur,index) =>
        getEpsilonRateAtPosition(index, input)
    ).join('');
    return parseInt(binary, 2);
}

export const getOxygenGeneratorRating = (input, pos = 0) => {
    const [os,is] = getOsAndIs(pos, input);
    const matcher = os > is ? '0' : '1';
    const matches = input.filter(i => i[pos] === matcher);
    return matches.length === 1
        ? parseInt(matches[0], 2)
        : getOxygenGeneratorRating(matches, pos + 1);
}

export const getCo2ScrubberRating = (input, pos = 0) => {
    const [os,is] = getOsAndIs(pos, input);
    const matcher = is < os ? '1' : '0';
    const matches = input.filter(i => i[pos] === matcher);
    return matches.length === 1
        ? parseInt(matches[0], 2)
        : getCo2ScrubberRating(matches, pos + 1);
}
