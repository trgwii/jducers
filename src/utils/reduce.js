import curry from './curry';
import head from './head';
import isEmpty from './isEmpty';
import tail from './tail';

const reduce = curry((f, acc, list) =>
    isEmpty(list)
        ? acc
        : reduce(
            f,
            f(acc, head(list)),
            tail(list)));

export default reduce;
