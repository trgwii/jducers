import curry from './curry';

const partial = curry((f, ...args) =>
    f.bind(null, ...args), 2);

export default partial;
