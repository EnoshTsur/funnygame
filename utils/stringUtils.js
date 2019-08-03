function stringUtils() {

    const { pipe, } = fn

    const _empty = ""
    const _space = " "
    const _lower = str => str.toLowerCase();
    const _upper = str => str.toUpperCase();
    const _trim = str => str.trim();
    const _lower_trim = str => pipe(_trim, _lower)(str)
    const _upper_trim = str =>  pipe(_trim, _upper)(str)
    const _more_than_one_word = str => str.split(_space).length > 0;

    const _title = str => {
        const titleSingle = str => `${_upper(str[0])}${str.slice(1)}`
        return _more_than_one_word(str) ?
            str.split(_space).map(titleSingle).join(_space) :
            titleSingle(str);
    }

    function _extract(func) {
        return str => func(str)
    }

    function _numbers(str) {
        const onlyNumbers = str => str.replace(/\D+/g, _empty)
        return str.includes('-') ? `-${onlyNumbers(str)}` : onlyNumbers(str) 
    }

    var extract_numbers = Object.freeze(_extract(_numbers))

    return {
        _lower,
        _upper,
        _trim,
        _lower_trim,
        _upper_trim,
        _more_than_one_word,
        _space,
        _empty,
        _title,
        extract_numbers,
    }
}


