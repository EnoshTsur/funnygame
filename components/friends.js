function create_friends(){

    const { _is_left, _is_right, _is_up, _is_down, KEY_PRESS } = key
    const { extract_numbers, } = str
    const { parseOrZero, } = num
    const { pipe, } = fn
    const { pixelIt, } = dom


    const friendsElement = dom._create(
        ELEMENTS_TYPES.DIV,
        str._empty,
        {
            minWidth: '10rem',
            minHeight: '10rem',
            backgroundColor: 'lightblue',
            display: 'inline-block',
            position: 'absolute',
            left: '-200px',
            top: '10px',
        },
        'friends'
    )

    function onKey(event) {

        const position = {}
        const directions = ['top', 'left', ] 

        directions.forEach(current => position[current] = 
            pipe(extract_numbers, parseOrZero)(friendsElement.style[current]))

        const SPEED = 4

        switch(true) {
            case _is_left(event):
                friendsElement.style.left = pixelIt(position.left - SPEED)
                break
            case _is_right(event):
                friendsElement.style.left= pixelIt(position.left + SPEED)
                break
            case _is_up(event):
                friendsElement.style.top = pixelIt(position.top - SPEED)
                break
            case _is_down(event):
                friendsElement.style.top = pixelIt(position.top + SPEED)
                break
            default:
                console.log(event.keyCode)
        }
    }

    document.addEventListener(KEY_PRESS, onKey)
    return friendsElement
}
