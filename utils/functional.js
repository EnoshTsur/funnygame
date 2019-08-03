function functional() {

    const { hasLength, } = is

    const not = fn => arg => !fn(arg)
    const pipe = (...fns) => arg => fns.reduce((fn1, fn2) => fn2(fn1), arg)
    const hof = fn => (...args) => fn(...args)

    function Try(fn, ...args) {
        let error = null
        let hasError = false
        let _value = null

        try{
            _value = hasLength(args) ? fn(...args) : fn()
        } catch (err) {
            error = err
            hasError = true
        }

        function map(fn) { return fn(value)}
        function get() { return _value }
        function getOrElse(fn){ return fn(error) }
        function getOrElseGet(other) { return _value ? _value : other }
        function getOrElseThrow(message) {
            if(hasError) throw message
            return _value
        }
        const isEmpty = () => !_value

        return {
            get,
            getOrElse,
            getOrElseGet,
            isEmpty,
            error,
            hasError,
            _value,
        }
    }

    return {
        not,
        pipe,
        hof,
        Try,
    }
}
