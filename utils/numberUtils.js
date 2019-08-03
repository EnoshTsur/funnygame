function numberUtils() {

    const { Try, } = fn

    const ZERO = 0

    function parseOrZero(str) {
        return Try(text => Number(text), str).getOrElseGet(ZERO)

    }

    return {
        parseOrZero,
    }

}
