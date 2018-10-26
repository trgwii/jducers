const curry = (fn, arity = fn.length) =>
    (...args) =>
        args.length >= arity
            ? fn(...args)
            : curry(
                fn.bind(null, ...args),
                arity - args.length);

export default curry;
