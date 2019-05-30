const extend=require('extend');

console.log(extend({},{
    name: "I am defined in common"
}));

console.log(`I am from common,`);

Promise.resolve('Common').then(d=>{
    console.log(d);
    console.log('node__modules');
});

module.exports={
    book: 'common.js'
}
