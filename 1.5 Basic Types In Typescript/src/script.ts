// // TypeScript code demonstrating different data types
// let myString : string = "Hello, World!";
// let myNumber : number = 42;
// let myBoolean : boolean = true;
// let mySymbol : symbol = Symbol("mySymbol");
// let myBigInt : bigint = 9007199254740991n;

// const addTwoNumbers = (a : number, b:number) : number=>{
//     return a + b;
// }

// const addThreeNumbers = (d: number, e:number, f:number)=>{
//     return(d+e+f);
// }

// console.log(addTwoNumbers(125, 255)); // Output: 380
// console.log(addThreeNumbers(5, 1250, 1555)); // Output: 2810


// //1-8 Optional, Default Parameters In function 

// const concatName = (firstName:string, lastName:string, middleName:string)=>{
//     if(!lastName){
//         return firstName +""+middleName;
//     }
//     return firstName +""+middleName+""+lastName;
// }

// console.log(concatName("John", "Doe", "Smith")); // Output: John Smith Doe


const addTwo = (a: number, b: number)=>{
    return a + b;
}

console.log(addTwo(5555, 20)); // Output: 30


const arr : string[] =["Programming", "Hero", "Next", "Level"];
arr.push("Next Level");
console.log(arr); // Output: ["Programming", "Hero", "Next", "Level", "Next Level"]
console.log("Length of arr: ", arr.length)

const concatName = ( firstName:string, lastName:string)=>{
    if(!lastName){
        return firstName;
    }
    return firstName + "" + lastName;
}
console.log(concatName("liton", "Shahidul")) // Output: John Doe


const greetings = (greeting:string, fullName:string)=>{
    return `${greeting}, ${fullName}!`;
}

console.log(greetings("Hello", "Typescript")); // Output: Hello, TypeScript!

const greet =() : void=>{
    console.log("Hello, World! using void function");
}

greet(); // Output: Hello, World!


// Object type, type alias and interface

// Type alias
type TUser = {
    name: string;
    age: number;
    isActive:boolean;
    action:()=>void;
    badges: string[];
}

// create user object using the User type alias
const user: TUser = {
    name:"liton",
    age: 123,
    isActive: true,
    action: () => console.log("Hello, World!"),
    badges: ["admin", "editor", "subscriber"]
}

const user2: TUser={
    name:"shahidul",
    age: 234,
    isActive: false, 
    action: () => console.log("user2 action"),
    badges: ["user", "contributor"]
}

// Interface
type  Address ={
    streetName: string;
    city: string;
    country: string;
    holdingNaumber: number;
}
interface  IUser{
    name: string;
    age: number;
    isActive:boolean;
    action: () => void;
    badges: string[];
    address: Address;  // Address type is used here to define the structure of the address property
}   

// create user object using the IUser interface

const user3: IUser = {
    name: "wasenat",
    age:5,
    isActive: true,
    action: ()=> console.log("user2 action"),
    badges: ["admin", "editor", "subscriber"],
    address: {
        streetName: "123 Main St",
        city: "New York",
        country: "USA",
        holdingNaumber: 123
    }
}
console.log(user) // Output: { name: 'wasenat', age: 5, isActive: true, action: [Function: action], badges: [ 'admin', 'editor', 'subscriber' ] };
console.log(user2) // Output: { name: 'shahidul', age: 234, isActive: false, action: [Function: action], badges: [ 'user', 'contributor' ] };
console.log(user3) // Output: { name: 'wasenat', age: 5, isActive: true, action: [Function: action], badges: [ 'admin', 'editor', 'subscriber' ] };