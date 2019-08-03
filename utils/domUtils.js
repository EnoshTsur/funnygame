const BODY = () => document.body

const ELEMENTS_TYPES = Object.freeze({
    H: {
        H1: "h1",
        H2: "h2",
        H3: "h3",
        H4: "h4",
        H5: "h5",
        H6: "h6",
    },
    P: "p",
    DIV: "div",
    SPAN: "span",
    INPUT: "input",
    BUTTON: "button",
    A: "a",
    IMG: "img",
    UL: "ul",
    OL: "ol",
    LI: "li",
    TABLE: "table",
    THEAD: "thead",
    TBODY: "tbody",
    TR: "tr",
    TD: "td",
    TH: "th",
    ARTICLE: "artcle",
    ASIDE: "aside",
    SECTION: "section",
    HEADER: "header",
    FOOTER: "footer",
    NAV: "nav",
    MAIN: "main",
})

function domManipulation() {

    const { not, } = fn
    const { hasLength, } = is

    const _change_body_bg = color => document.body.style.backgroundColor = color

    function _get(id) {
        return document.getElementById(id)
    }

    function _get_attr_by_element(element) {
        return function (attribute) {
            return element[attribute]
        }
    }

    function _get_attr_by_id(id) {
        return function (attribute) {
            return _get(id) && (id)[attribute]
        }
    }

    function _set_text(id) {
        return text => {
            if (_get(id)) _get(id).innerText = text
        }
    }


    function _remove_element(id) {
        return function(from) {
            return _get(from) && _get(from).removeChild(_get(id))
        }
    }

    const _remove_element_from_body = id => _get(id) && document.removeChild(_get(id))
    

    // Create Simple element
    function _c(elementType) {
        return document.createElement(elementType);
    }

    // Add text to exist element
    function _append_text(text, element) {
        element.appendChild(document.createTextNode(text));
        return element;
    }


    // Add Style to exist element
    function _set_style(element, style) {
        Object.entries(style).forEach(
            ([name, value]) => element.style[name] = value
        );
        return element;
    }

    // Pipe returns a new function to create elements
    function _eb(fn1, fn2, f3) {
        return (element, text, style) => f3(fn2(text, fn1(element)), style);
    }

    const _fullElement = _eb(_c, _append_text, _set_style);

    // Creating complete element with text and style
    const _create = (element, text, style, id, className) => {
        const current = _fullElement(element, text, style);
        if (not(is._nullOrUndefined)(id)) current.id = id;

        if (not(is._nullOrUndefined)(className)) {
            if (is._string(className)) {
                current.classList.add(className)
            }
            else if (is._array(className) && hasLength(className)) {
                className.forEach(oneClass => current.classList.add(oneClass));
            }
        }
        return current;
    }

    function _inject(element, to) {
        to.appendChild(element)
        return element
    }

    const pixelIt = (...args) => {
        const PX = 'px'
        if(is._nullOrUndefined(args) || args.length === 0) return PX
        if(args.length === 1 && not(is._nullOrUndefined)(args[0])) {
            if(is._array(args[0])) {
                return args[0].map(x => pixelIt(x))                
            } else {
                return `${args[0]}${PX}`
            }
        }
        if(args.length === 1 && is._nullOrUndefined(args[0])) {
            throw "[Error]: Can't map over list of undefined"
        }
        return args.map(x => pixelIt(x))
    }

    return {
        _append_text,
        _create,
        _get,
        _get_attr_by_element,
        _get_attr_by_id,
        _inject,
        _set_style,
        _change_body_bg,
        _remove_element,
        _remove_element_from_body,
        _set_text,
        pixelIt,
    }
}

const dom = domManipulation()



