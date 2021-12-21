export const decodeInput = (input) =>
    input.map(str => {
            const [a,b] = str.split(' -> ');
            const [a0,a1] = a.split(',');
            const [b0,b1] = b.split(',');
            return [
                [Number(a0),Number(a1)],
                [Number(b0),Number(b1)],
            ];
        });

export const getCoordsForLocation = ([[x0,y0],[x1,y1]]) => {
    const xDiff = Math.abs(x0 - x1);
    const yDiff = Math.abs(y0 - y1);

    if(xDiff>0 && yDiff>0) {
        // For Part1, return an empty array here
        const xShift = (x,i) => (x0<x1 ? x+i : x-i);
        const yShift = (y,i) => (y0<y1 ? y+i : y-i);
        return Array(xDiff+1)
            .fill(0)
            .map((x,i) => `${xShift(x0,i)},${yShift(y0,i)}`);
    }
    if(xDiff > yDiff) {
        const shift = (x,i) => (x0<x1 ? x+i : x-i);
        return Array(xDiff+1)
            .fill(0)
            .map((x,i) => `${shift(x0,i)},${y0}`);
    }
    const shift = (y,i) => (y0<y1 ? y+i : y-i);
    return Array(yDiff+1)
        .fill(0)
        .map((y,i) => `${x0},${shift(y0,i)}`);
};

const countOccurrences = (arr, counts = {}) => {
    const [current,...remaining] = arr;
    counts[current] = counts[current] ? counts[current] + 1 : 1;
    return remaining.length === 0
        ? counts
        : countOccurrences(remaining,counts);
}

export const findOverlaps = (ventLocations) => {
    const mappedVents = decodeInput(ventLocations);
    const vents = mappedVents
        .map(x => getCoordsForLocation(x))
        .flat();
    const counts = countOccurrences(vents);
    // Recursion doesn't work for real puzzle output - use for loop.
    // const counts = {};
    // for (const num of vents) {
    //     counts[num] = counts[num] ? counts[num] + 1 : 1;
    // }

    return Object.keys(counts)
        .filter(k => counts[k]>1)
        .length;
};
