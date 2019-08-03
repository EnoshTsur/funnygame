function isPredicates() {
    
    function init(something) {
        return predicate => predicate(something)
    }

    function hasLength(something) {
        return something.length !== undefined
    }

    const _undefined = (something) => something == undefined

    const _null = something => something == null

    const _nullOrUndefined = something => (_null(something) || _undefined(something))

    const _typeOf = type => element => typeof element == type

    const _object = something => _typeOf('object')(something)

    const _string = something => _typeOf('string')(something)

    const _number = something => _typeOf('number')(something)

    const _boolean = something => _typeOf('boolean')(something)

    const _array = something => Array.isArray(something);

    const _empty = something => {
        const test = init(something)
        // Handle Object / Array / String
        const handleObject = object => Object.entries(object).length === 0

        // Handle Number
        const handleNumber = number => number <= 0

        // Handle Boolean
        const handleBoolean = bool => bool;

        const handleStrArray = str => str.length < 1
        // Return
        return test(_nullOrUndefined) ? true :
           test(_object) ? handleObject(something) :
                (test(_string) || test(_array)) ? handleStrArray(something) :
                    test(_number) ? handleNumber(something) :
                       test(_boolean) ? handleBoolean(something) :
                            true
    }

    return {
        init,
        hasLength,
        _array,
        _boolean,
        _empty,
        _null,
        _nullOrUndefined,
        _number,
        _object,
        _string,
        _typeOf,
        _undefined,
    }
}


