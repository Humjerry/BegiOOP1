//   let i = 65;
//   let u = i + 102;
//   while (i < u) {
//     console.log(String.fromCharCode(i));
//     i++;
//   }

//   while (condition) {}

// const shirt = {
//     name: "T-Shirt",
//     price:"N4444",
//     color: "black",
// }

// class Shirt{
//     constructor(shirtName,shirtPrice,shirtColor){
//         this.name =shirtName,
//         this.color = shirtColor,
//         this.price = shirtPrice

//     }
// }

// const kemiShirt = new Shirt("LV","N80,000","Black");
// console.log(kemiShirt);
// const noelShirt = new Shirt("GC", "N100,000","Blue")
// console.log(noelShirt);

class StudentDetails {
  constructor(studentName, studentAge, studentGender) {
    (this.name = studentName),
      (this.age = studentAge),
      (this.gender = studentGender);
  }
}
const student = new StudentDetails(
  prompt("Please enter your name"),
  prompt("Please enter your age"),
  prompt("Please enter your gender"),
);
console.log(student);
