function receivesAFunction(age) {
    age()
}
function returnsANamedFunction() {
   return function name() {
    console.log('This is the name')
   }
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log()
    }
}