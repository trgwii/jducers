import flip from './flip';
import id from './id';
import o from './o';
import reduce from './reduce';
import unapply from './unapply';

const pipe = unapply(reduce(flip(o), id));

export default pipe;
