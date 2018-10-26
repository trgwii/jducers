import curry from './curry';

const o = curry((f, g, x) =>
    f(g(x)));

export default o;
