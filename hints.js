function hints() {

    function hb(func) {
        return delay => {
            if (fn._negate(is._number)(delay)) return;
            return setTimeout(func, delay);
        }
    }
    
    /**
     * 
     * @param _number delay 
     */
    function _welcomeHint(delay) {
        // Element
        function hintElement() {
            const type = 'h3'
            const text = "Check out your console.. ( Use F12 or Fn + F12 -> Look up for Console )"
            const style = { padding: '1rem', color: 'orange', textShadow: '0 2px 3px yellow' }
            const id = 'welcome-hint'
            const classes = ['animated', 'infinite', 'pulse', 'welcome-hint']
            return dom._create(type, text, style, id, classes);
        }
        // Destination
        const to = dom._get('welcome');

        // Logging
        log._pizza('Great! so you do want us to talk!')
        log._swords([
            'But i dont know you yet...',
            'Create your self with a special function'
        ])
        log._unicorn('Type to console and look for yourself ( You ) ')
        // Inject elemnt to destination with delay
        return hb(() => dom._inject(hintElement(), to))(delay)
    }

    return {
        _welcomeHint,
    }
}

const hint = hints();




