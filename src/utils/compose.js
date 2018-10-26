import id from './id';
import o from './o';
import reduce from './reduce';
import unapply from './unapply';

const compose = unapply(reduce(o, id));

export default compose;
