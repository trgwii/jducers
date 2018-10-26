import curry from './curry';

const tail = curry(list =>
    list && list.slice(1));

export default tail;
