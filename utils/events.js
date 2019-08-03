function keys() {

    const KEY_PRESS = 'keypress'
    const _is_left = event => event.keyCode === 97
    const _is_right = event => event.keyCode === 100
    const _is_down = event => event.keyCode === 115
    const _is_up = event => event.keyCode === 119 


    return {
        KEY_PRESS,
        _is_left,
        _is_right,
        _is_down,
        _is_up,
    }

}

const key = keys()
