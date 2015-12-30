
var arr = [1, 2, 3, 4];

console.log( arr.map( i => i * i ) );

let first = ( size, ...args ) => [ ...args ].slice(0,size);

console.log( first(3, 1, 2, 3, 4, 5, 6) );

export default first

