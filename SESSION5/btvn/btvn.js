// let arr = [
//     {
//         Name: "Sony Xperia XZ Premium",
//         Brand: "Sony",
//         Price: 4428,
//         Color: "White",
//         Category: "Changer",
//     },
//     {
//         Name: "Oppo F3 Plus",
//         Brand: "OPPO",
//         Price: 5487,
//         Color: "Black",
//         Category: "Phone",
//     },
//     {
//         Name: "Iphone 13 Pro Max",
//         Brand: "Apple",
//         Price: 21490,
//         Color: "Gray",
//         Category: "Phone",
//     },
//     {
//         Name: "Samsung Galaxy S8",
//         Brand: "Samsung",
//         Price: 8490,
//         Color: "Blue",
//         Category: "Phone",
//     },
// ]
// console.table(arr);
// // 1.1
// for (i = 0; i <= arr.length - 1; i++) {
//     console.log("1.1------------------------");
//     console.log(`Name : ${arr[i].Name}`);
//     console.log(`Price : ${arr[i].Price}`);
// };
// // 1.2:
// let cars = Number(prompt(" Hãy nhập số để kiểm tra xe"));
// console.log('1.2----------------------------------');
// console.log(`Name : ${arr[cars].Name}`);
// console.log(`Brand : ${arr[cars].Brand}`);
// console.log(`Price : ${arr[cars].Price}`);
// console.log(`Color : ${arr[cars].Color}`);
// console.log(`Category : ${arr[cars].Category}`);
// //1.3
// let muc = String(prompt(" Nhập danh mục "));
// for (i = 0 ; i <= arr.length - 1; i++) {
//     if (muc == arr[i].Category) {
//         console.log("1.3------------------------");
//         console.log(`Name : ${arr[i].Name}`);
//         console.log(`Price : ${arr[i].Price}`);
//     }
// }

// //1.4 ;
// arr[0].Providers = "Phukienso";
// arr[1].Providers = "tgdd";
// arr[2].Providers = "tgdd";
// arr[3].Providers = "tgdd";
// console.table(arr);
// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log("1.4--------------------------");
//     console.log(`# ${i} Name : ${arr[i].Name}`);
//     console.log(`Price : ${arr[i].Price}`);
//     console.log(`Providers : ${arr[i].Providers}`);
// }
// //1.5 :
// let nhacungcap = String(prompt(" Chọn nhà cung cấp"));
// for (let i = 0 ; i <= arr.length - 1; i++) {
//     if (nhacungcap == arr[i].Providers) {
//         console.log("1.5----------------------------");
//         console.log(`Name : ${arr[i].Name}`);
//         console.log(`Brand : ${arr[i].Brand}`);
//         console.log(`Price : ${arr[i].Price}`);
//         console.log(`Color : ${arr[i].Color}`);
//         console.log(`Category : ${arr[i].Category}`);
//         console.log(`Providers : ${arr[i].Providers}`);
//     }
// }





// 2
// let study =[
//     ["html",{Complete: "false"}],
//     ["css",{Complete: "false"}],
//     ["javascript",{Complete: "false"}],
//     ['node packge manager',{Complete: "false"}],
//     ["git",{Complete: "false"}]
// ]
// for(let i = 0; i < study.length; i++) {
//     console.log(`${i+1}: ${study[i][0]} \n   ${Object.keys(study[i][1])[0]}: ${study[i][1][Object.keys(study[i][1])[0]]} `);
// }
// let state = true;
// while(state) {
//     let userInput = prompt("Enter your command(C/R/U/D/E)");
//     if(userInput == 'C') {
//         let newmss = prompt('Enter new task');
//         study.push([newmss,{Complete: "false"}]);
//         for(let i = 0; i < study.length; i++) {
//             console.log(`${i+1}: ${study[i][0]} \n   ${Object.keys(study[i][1])[0]}: ${study[i][1][Object.keys(study[i][1])[0]]} `);
//         }
//     }else if (userInput == 'R') {
//         let a = Number(prompt('Enter position'));
//         let b = prompt('Enter new title');
//         study[a-1][0]= b;
//         for(let i = 0; i < study.length; i++) {
//             console.log(`${i+1}: ${study[i][0]} \n   ${Object.keys(study[i][1])[0]}: ${study[i][1][Object.keys(study[i][1])[0]]} `);
//         }
//     }else if (userInput == "U") {
//         let c = Number(prompt('Enter position'));
//         study[c-1][1].Complete = 'true';
//         for(let i = 0; i < study.length; i++) {
//             console.log(`${i+1}: ${study[i][0]} \n   ${Object.keys(study[i][1])[0]}: ${study[i][1][Object.keys(study[i][1])[0]]} `);
//         }
//     }else if (userInput == 'D') {
//         let d = Number(prompt('Enter deleter'));
//         study.splice(d-1)
//         for(let i = 0; i < study.length; i++) {
//             console.log(`${i+1}: ${study[i][0]} \n   ${Object.keys(study[i][1])[0]}: ${study[i][1][Object.keys(study[i][1])[0]]} `);
//         }
//     }else if(userInput == 'E') {
//         console.log('bye bye');
//         state = false;
//     }
// }










