(function firstHint() {
    // Start game
    hint._welcomeHint(time._second(5));
})()

function userWasSet(user) {

    const WELCOME = 'welcome'
    const WELCOME_HINT = 'welcome-hint'
    const WELCOME_HEADER = 'welcome-header'

    function log() {
        user.sendMessage(`Now I'm finally get to know you ${user.name}!`)
        user.sendMessage('Well now you should look up for your friends...')
    }

    function style_change() {
        dom._change_body_bg('black')
        dom._set_text(WELCOME_HEADER)(`Hahaha ${user.name} your friends are here...`)
        dom._set_text('p1')('Try to lift them with your fingers..')
        dom._remove_element('p2')(WELCOME)
        dom._set_style(dom._get(WELCOME_HEADER), { color: 'lime' })

        const remove_hint = () => {
            if (dom._get(WELCOME_HINT)) {
                dom._remove_element(WELCOME_HINT)(WELCOME)
            } else {
                setTimeout(() => remove_hint(), 1)
            }
        }
        remove_hint()

    }

        dom._inject(create_friends(), document.body)

    log()
    style_change()
}
