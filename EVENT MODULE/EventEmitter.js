//event emitter is a class
//emit("event parameter"):trigger/create/fire and on("event emit parameter", callback)
// const EventEmitter=require("events")
// const event=new EventEmitter();
// event.on("greet",()=>{
//     console.log("This is event emitter");
// })
// event.emit("greet")
// event.emit("greet")
// event.emit("greet")
// event.emit("greet")

// class MyEmitter extends EventEmitter{}
// const event=new MyEmitter()
// event.on("greet",()=>{
//     console.log(`hello &{msg}`);//template literals: `${var}`
// })
// event.on("exit",()=>{
//     console.log("exits application...")
// })
// event.emit("greet","cse 21 this fsd class");
// event.emit("exit")

//02 simulate dom like event handling in nodejs
const EventEmitter=require("events");
// class Button extends EventEmitter
// {
//     click(){
//         console.log("/ncall button click event");
//         this.emit("click");
//     }
//     mouseover(){
//         console.log("/n call button mouseover event");
//         thid .emit("mouseover");
//     }
//     const button=new Button();
//     button.on("click",() => {

//     })
// }

//set immediate
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();