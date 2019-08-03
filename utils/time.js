function timeUtils() {

    const { not, } = fn

    function _second(number) {
        if (not(is._number)(number)) return 0;
        if (number <= 0) return 0;
        return number * 1000
    }
    
    function _minute(number) {
        if (not(is._number)(number)) return 0;
        if (number <= 0) return 0;
        return number * (second(1) * 60)
    }
    
    function _hour(number) {
        if (not(is._number)(number)) return 0;
        if (number <= 0) return 0;
        return number * (minute(1) * 60)
    };

    return {
        _second,
        _minute,
        _hour
    }
    
}

