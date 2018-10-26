import curry from './curry';

const unapply = curry((f, ...a) =>
    f(a), 2);

export default unapply;
