function hint(func) {
    return delay => {
        if (fn._negate(is._number)(delay)) return;
        return setTimeout(func, delay);
    }
}

function welcomeHint(delay) {

    function hintElement() {
        const type = 'h3'
        const text = "Check out your console.. ( Use F12 or Fn + F12 -> Look up for Console )"
        const style = { padding: '1rem', color: 'orange', textShadow: '0 2px 3px yellow' }
        const id = 'welcome-hint'
        const classes = ['animated', 'infinite', 'pulse', 'welcome-hint']
        return dom._create(type, text, style, id, classes);
    }

    const to = dom._get('welcome');

    log._pizza('Great! so you do want us to talk!')
    log._swords([
        'But i dont know you yet...',
        'Create your self with a special function'
    ])
    log._unicorn('Type to console and look for yourself ( You ) ')

    return hint(() => dom._inject(hintElement(), to))(delay)
}

function userWasSet(user) {
    user.sendMessage(`Now I'm finally get to know you ${user.name}!`)
}

// =================================== //
//   Game start :)                     //
// =================================== //
welcomeHint(time._second(15));

