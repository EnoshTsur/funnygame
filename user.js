function Me(name, gender) {

    const logTypeError = attrName => log._stupid([`${attrName} must be a string -> 'Like this!!'`, 'Try again..'])

    if (fn._negate(is._string)(name)) {
        logTypeError('Name');
        return null;
    }
    if (fn._negate(is._string)(gender)) {
        logTypeError('Gender')
        return null;
    }
    if (is._empty(name) || is._empty(gender)) {
        log._stupid("Empty string is not allowed! -> new Me('john', 'male')")
        return null;
    }


    this.name = str._title(name);
    this.gender = gender;
    this.points = 0;
    this.sendMessage = message => {
        str._lower_trim(this.gender) === 'female' ? log._female(message) :
            str._lower_trim(this.gender) === 'male' ? log._male(message) :
                log._ufo(message);
    }

    log._swords([
        `In order to be ${this.name} you should save it into const`,
        `For example: const ${this.name} = new Me('${this.name}', '${this.gender}')`
    ]);

    log._gohst(`If you didnt initiate your self like this, please try again`)

    userWasSet(this)

}

Me.toString = () => "Creates new user by typing: const me = new Me('yourname..', 'your gender...')"