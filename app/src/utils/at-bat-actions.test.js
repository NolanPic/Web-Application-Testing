import { strike, ball, foul, hit } from './at-bat-actions';

// strike
test('strike increments strikes by one', () => {
    let count = { balls: 0, strikes: 1 };

    let expected = { balls: 0, strikes: 2 };

    expect(strike(count)).toEqual(expected);
    
});

test('strike resets strikes and balls when 3 strikes reached', () => {
    let count = { balls: 2, strikes: 2 };

    let expected = { balls: 0, strikes: 0 };

    expect(strike(count)).toEqual(expected);
});

// ball
test('ball increments balls by one', () => {
    let count = { balls: 2, strikes: 0 };

    let expected = { balls: 3, strikes: 0 };

    expect(ball(count)).toEqual(expected);
});

test('ball resets strikes and balls when 4 balls reached', () => {
    let count = { balls: 3, strikes: 1 };

    let expected = { balls: 0, strikes: 0 };

    expect(ball(count)).toEqual(expected);
});

// foul
test('foul increments strikes by one', () => {
    let count = { balls: 0, strikes: 0 };

    let expected = { balls: 0, strikes: 1 };

    expect(foul(count)).toEqual(expected);
});

test('foul does not cause strikes to exceed 2', () => {
    let count = { balls: 2, strikes: 2 };

    let expected = {balls: 2, strikes: 2};

    expect(foul(count)).toEqual(expected);
});

// hit
test('hit causes count to reset', () => {
    let count = { balls: 2, strikes: 1 };

    let expected = { balls: 0, strikes: 0 };

    expect(hit(count)).toEqual(expected);
});