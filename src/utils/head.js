import curry from './curry';

const head = curry(list =>
    list && list[0]);

export default head;
