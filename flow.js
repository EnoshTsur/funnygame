(function firstHint() {
    // Start game
    hint._welcomeHint(time._second(15));
})()

function userWasSet(user) {
    user.sendMessage(`Now I'm finally get to know you ${user.name}!`)
    user.sendMessage('Well now you should look up for your friends')
}