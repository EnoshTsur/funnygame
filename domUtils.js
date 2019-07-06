function domManipulation() {
    function _get(id) {
        return document.getElementById(id)
    }

    function _get_attr(element) {
        return function(attribute) {
            return element[attribute]
        }
    }
    
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
    function _eb(fn1, fn2, f3){
        return (element, text, style) => f3(fn2(text, fn1(element)), style);
    }

    const _fullElement = _eb(_c, _append_text, _set_style);
    
    // Creating complete element with text and style
    const _create = (element, text, style, id, className) => {
        const current = _fullElement(element, text, style);
        if (fn._negate(is._nullOrUndefined)(id)) current.id = id;
       
        if (fn._negate(is._nullOrUndefined)(className)) {
            if(is._string(className)) {
                current.classList.add(className)
            } 
            else if (is._array(className) && hasLength(className)) {
                className.forEach( oneClass => current.classList.add(oneClass));
            }
        } 
        return current;
    }
    
    function _inject(element, to) {
        to.appendChild(element)
        return element
    }

     return {
         _append_text,
         _create,
         _get,
         _get_attr,
         _inject,
         _set_style,
     }
}

const dom = domManipulation()



