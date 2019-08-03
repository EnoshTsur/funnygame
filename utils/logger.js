const log = logger()

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
            init,
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





