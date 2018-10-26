import curry from './curry';

const partialRight = curry((f, ...args) =>
    (...rest) =>
        f(...rest, ...args), 2);

export default partialRight;
