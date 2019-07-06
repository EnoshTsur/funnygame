// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!! Real Utils instances !!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const is = isPredicates()
const str = stringUtils()
const fn = functional()
const log = logger()


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!! Closures !!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function functional() {
    const _negate = func => args => !func(args);

    const _pipe = (...fns) => arg => fns.reduce((fn1, fn2) => fn1(fn2), arg);

    const _private = attribute => () => attribute

    const _hof = func => arg => func(arg)

    return {
        _negate,
        _pipe,
        _private,
        _hof
    }

}

function hasLength(something) {
    return something.length !== undefined
}

function isPredicates() {
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
        // Handle Object / Array / String
        const handleObject = object => Object.entries(object).length === 0

        // Handle Number
        const handleNumber = number => number <= 0

        // Handle Boolean
        const handleBoolean = bool => bool;

        const handleStrArray = str => str.length < 1
        // Return
        return _nullOrUndefined(something) ? true :
            _object(something) ? handleObject(something) :
                (_string(something) || _array(something)) ? handleStrArray(something) :
                    _number(something) ? handleNumber(something) :
                        _boolean(something) ? handleBoolean(something) :
                            true
    }

    return {
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

function stringUtils() {
    const _empty = ""
    const _space = " "
    const _lower = str => str.toLowerCase();
    const _upper = str => str.toUpperCase();
    const _trim = str => str.trim();
    const _lower_trim = str => _lower(_trim(str));
    const _upper_trim = str => _upper(_trim(str));
    const _more_than_one_word = str => str.split(_space).length > 0;

    const _title = str => {
        const titleSingle = str => `${_upper(str[0])}${str.slice(1)}`
        return _more_than_one_word(str) ?
            str.split(_space).map(titleSingle).join(_space) :
            titleSingle(str);
    }

    return {
        _lower,
        _upper,
        _trim,
        _lower_trim,
        _upper_trim,
        _space,
        _empty,
        _title
    }
}


function logger() {
    // Define your custom commands and emoji
    const commands = Object.freeze([
        ["unicorn", "🦄"],
        ["pizza", "🍕"],
        ["beer", "🍺"],
        ["poo", "💩"],
        ["gohst", "👻"],
        ["crystal", "🔮"],
        ["swords", "⚔️"],
        ["stupid", "🤦🏻‍"],
        ["ufo", "👽"],
        ["male", "👱🏼"],
        ["female", "👱🏼‍♀️"]
    ]);

    const errorMessage = err => `[Error]: ${err}`

    function _improvise(symbol, content) {
        if (fn._negate(is._string)(symbol)) {
            console.log(content)
            return;
        }
        if (is._array(content)) {
            try {
                content.forEach(line => console[symbol](line))
                return
            } catch (err) {
                _stupid(errorMessage(err))
            }
        }
        try {
            console[symbol](content)
        } catch (err) {
            _stupid(errorMessage(err))
        }

    }

    function _swords(text) {
        if (is._array(text)) {
            text.forEach(line => console.swords(line))
        } else {
            console.swords(text)
        }
    }

    function _stupid(text) {
        if (is._array(text)) {
            text.forEach(line => console.stupid(line))
        } else {
            console.stupid(text)
        }
    }

    function _gohst(text) {
       if (is._array(text)) {
            text.forEach(line => console.gohst(line))
        } else {
            console.gohst(text)
        }
    }

    function _pizza(text) {
         if (is._array(text)) {
            text.forEach(line => console.pizza(line))
        } else {
            console.pizza(text)
        }
    }

    const _male = text => {
        if (is._array(text)) {
            text.forEach(line => console.male(line))
        } else {
            console.male(text)
        }
    }

    const _female = text => {
        if (is._array(text)) {
            text.forEach(line => console.female(line))
        } else {
            console.female(text)
        }
    }

    const _ufo = text => {
         if (is._array(text)) {
            text.forEach(line => console.ufo(line))
        } else {
            console.ufo(text)
        }
    }


    const _unicorn = text => {
        if (is._array(text)) {
            text.forEach(line => console.unicorn(line))
        } else {
            console.unicorn(text)
        }
    }


    return {
        commands,
        _female,
        _gohst,
        _male,
        _pizza,
        _stupid,
        _swords,
        _ufo,
        _unicorn,
        _improvise
    }

}

// Initiate console with emojis

(() => {
    if (!window.console) return;

    // Create custom commands
    log.commands.forEach(command => {
        window.console[command[0]] = function () {

            // Get arguments as a string
            var args = Array.prototype.slice.call(arguments).toString().split(',').join(', ');

            // Log to the console with emoji
            console.log(command[1] + "  " + args);
        }
    });
})();





