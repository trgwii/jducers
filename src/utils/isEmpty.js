import curry from './curry';

const isEmpty = curry(x =>
    x.length === 0);

export default isEmpty;
