// Prototyple Inheritance
//
// var parent = {
//
//   value: "ParentValue",
//   obj: {
//     objValue : "parentObjValue"
//   },
//   walk: function () {
//
//     console.log("Walking!");
//   }
// };
//
// //object.create is used to pass value to which we need to pass value to
// //here we create a child which passes its value to parent
// var child = Object.create(parent);
// console.log("CHILD - child.value :", child.value);
// console.log("CHILD - child.obj.objValue :", child.obj.objValue);
// console.log("PARENT - parent.value :", parent.value);
// console.log("PARENT - parent.obj.objValue :", parent.obj.objValue);
// console.log("parent:", parent);
// console.log("child:", child);
//
// //CHeck the changed values
// //we are calling our own propertied for child.value and child.obj.objValue
// //here chil.value property is going to mask/cover parent.value and displays the value we gave
// child.value = "childValue";
// child.obj.objValue = "child.obj.objValue";
// console.log("*****CHANGED: child.value :, 'childValue'");
// console.log("*****CHANGED: child.obj.objValue :, 'childObjValue'");
// console.log("CHILD - child.value :", child.value);
// console.log("CHILD - child.obj.objValue :", child.obj.objValue);
// console.log("PARENT - parent.value :", parent.value);
// console.log("PARENT - parent.obj.objValue :", parent.obj.objValue);
// console.log("parent:", parent);
// console.log("child:", child);
//
// console.log("child.obj == parent.obj ?", child.obj == parent.obj);
//
// var grandChild = Object.create(child);
// console.log("GrandChild : ",grandChild);
// grandChild.walk();


function Dog(Name) {

  this.name = name;
  console.log("'this' is:", this);

}
var myDog = new Dog("Max");
console.log("Mydog:", myDog);

//This is not used in function constructor
Dog("Max2");
