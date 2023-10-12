// const timeTable = (activity, callback) => {
//     if (activity === 'running') {
//         return `${activity} is on a monday`;
//     } else if (activity === 'climbing') {
//         return `${activity} is on a tuesday and thursday`;
//     } else {
//         return 'day off';
//     }
//     return callback(receivesAFunction);
// }
function receivesAFunction(callback) {
    callback();
    return 'this is a callback';
    

}


function returnsANamedFunction() {
    function name (){

    }
    return name
 }

 function returnsAnAnonymousFunction() {
    return function(){

    }
 }