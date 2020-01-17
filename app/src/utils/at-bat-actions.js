
export const strike = count => {
    if(count.strikes == 2) { // this is the 3rd strike, reset
        return { strikes: 0, balls: 0 };
    }
    return { ...count, strikes: count.strikes+1 };
};

export const ball = count => {
    if(count.balls === 3) { // this is the 4th ball, reset
        return { strikes: 0, balls: 0 };
    }
    return { ...count, balls: count.balls+1 };
};

export const foul = count => {
    if(count.strikes < 2) {
        return { ...count, strikes: count.strikes+1 };
    }
    return count;
};

export const hit = () => {
    return { strikes: 0, balls: 0 };
};