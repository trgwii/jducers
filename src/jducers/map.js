import curry from '../utils/curry';

const _map = chain =>
    curry((f, input) =>
        chain(x => [ f(x) ], input));

export default _map;
