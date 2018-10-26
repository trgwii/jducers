import curry from './curry';

const flip = curry((f, a, b, ...rest) =>
    f(b, a, ...rest), 3);

export default flip;
