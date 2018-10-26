import curry from '../utils/curry';
import _filter from './filter';
import _map from './map';

export const chain = curry(function* _chain(f, input) {
    for (const x of input) {
        yield* f(x);
    }
});

export const filter = _filter(chain);
export const map = _map(chain);

export const reduce = curry((reducer, acc, input) => {
    for (const x of input) {
        acc = reducer(acc, x);
    }
    return acc;
});

export const observerFactory = (...cbs) =>
    function* observer(input) {
        for (const x of input) {
            cbs.forEach(cb => cb(x));
            yield x;
        }
    };

export const run = (f, input) => {
    const ret = f(input);
    const res = ret[Symbol.iterator] ? [ ...ret ] : ret;
    return res.length === 1 ? res[0] : res;
};
