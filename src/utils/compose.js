const compose = (...funcs) => (init_arg) => {
    return funcs.reduceRight((acc, cur) => cur(acc), init_arg);
}

export default compose;