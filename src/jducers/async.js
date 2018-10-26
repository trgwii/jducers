import curry from '../utils/curry';
import _filter from './filter';
import _map from './map';

export const chain = curry(async function* _chain(f, input) {
    for await (const x of input) {
        yield* await f(x);
    }
});

export const filter = _filter(chain);
export const map = _map(chain);

export const reduce = curry(async (reducer, acc, input) => {
    for await (const x of input) {
        acc = reducer(acc, x);
    }
    return acc;
});

export const observerFactory = (...cbs) =>
    async function* observer(input) {
        for await (const x of input) {
            cbs.forEach(cb => cb(x));
            yield x;
        }
    };

export const run = async (f, input) => {
    const res = [];
    const ret = f(input);
    if (!ret[Symbol.asyncIterator]) {
        return ret;
    }
    for await (const x of f(input)) {
        res.push(x);
    }
    return res.length === 1 ? res[0] : res;
};
