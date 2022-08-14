console.log("1.COMPARING TWO JSON data having same properties without order");
//COMPARING TWO JSON data having same properties without orded;
//var obj1={name:"person",age:"5"};
//var obj2={age:"5",name:"person"};
//shallow equality
// function shallowCompare(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   // console.log(keys1);
//   const keys2 = Object.keys(obj2);
//   // console.log(keys2);
//   if (obj1.lenght != obj2.lenght) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (obj1[key] != obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }



//deep equality

var obj1 = { name: "person", age: "5" };
var obj2 = { age: "6", name: "person"};
// let c = shallowCompare(obj1, obj2);
let d=deepCompare(obj1, obj2);
// console.log(c);
console.log(d);

function deepCompare(obj1,obj2){
    const keys1=Object.keys(obj1);
    const keys2=Object.keys(obj2);

    if (obj1.lenght != obj2.lenght) {
        return false;
      }

      for(const key of keys1){
        const val1=obj1[key];
        const val2=obj2[key];
        const areObject=isObject(val1) && isObject(val2);
        if(areObject && !deepEqual(val1,val2)||areObject&&val1!==val2){
            return false;

        }

      }
      return true;
}

function isObject(object){
    return object!=null && typeof(object)=='object';
}