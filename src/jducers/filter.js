import curry from '../utils/curry';

const _filter = chain =>
    curry((f, input) =>
        chain(x => f(x) ? [ x ] : [], input));

export default _filter;
