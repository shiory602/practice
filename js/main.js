'use strict';

{

  let yes = 'あいうえおka';
  for (let i = 0; i < yes.length; i++) {
    console.log('攻撃');
  }

  // let storage = localStorage;
  // let apple = { name: 'りんご', price: 150, made: '青森'};
  // storage.setItem('apple', JSON.stringify(apple));
  // let data = JSON.parse(storage.getItem('apple'));
  // console.log(data.name);


  // document.addEventListener('DOMContentLoaded', function() {
  //   document.getElementById('isbn').addEventListener('change', function() {
  //     location.href = '#' + this.value;
  //   }, false);
  // }, false);

  // document.addEventListener('DOMContentLoaded', function() {
  //   let timer = window.setInterval (
  //     function() {
  //       let dat = new Date();
  //       document.getElementById('result').textContent = dat.toLocaleTimeString();
  //     }, 0);

  //   document.getElementById('btn').addEventListener('click', function() {
  //     window.clearInterval(timer);
  //   }, false);
  // }, false);








  // var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
// var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
// var str2 = 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
// document.write(str.replace(p, '<a href="$1">$1</a>'));


  // let x = 10;
  // do {
  //   console.log('xの値は' + x);
  //   x++;
  // } while(x < 10);


// 配列の構造について↓↓↓

// const array = [1, 2, 3, 4, 5];
// const hairetsu = [4, 5, 6, 7, 8, 9];
// const array2 = [10, 15, 16, 17, 18, 19];

// function aiueo(yes) {
//   for (let i = 0; i < yes.length; i++) {
//     console.log(yes[i]);
//   }
// }
// aiueo(array);
// aiueo(hairetsu);
// aiueo(array2);

// const aiueo1 = (yes) => {
//   console.log(yes);
// };
// aiueo1(array);




// 1.Fizz Buzz問題
// ２の倍数の時にfizz
// ３の倍数の時にbuzz
// ２と３の倍数の時にfizz buzz 
// と表示されるコードを書いてください



// A.
// 1
// Fizz
// buzz
// Fizz
// 5
// fizzbuzz
// 7
// fizz
// buzz
// fizz

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function fizzBuzz(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 && array[i] % 3 === 0) {
//       console.log('fizz buzz');
//     } else if (array[i] % 3 === 0) {
//       console.log('buzz')
//     } else if (array[i] % 2 === 0) {
//       console.log('fizz');
//     } else {
//       console.log(array[i]);
//     }
//   }
// }
// fizzBuzz(array);





// 2.trueとfalseがランダムに入った配列の中が、
// 1つでもtrueが入っていたらtrueを返すコードを書いてください

// const random = [false, false, false, false];
// console.log(trueDouble(random));

// function trueDouble(random) {
//   for (let i = 0; i < random.length; i++) {
//     if (random[i] === true) {
//       return true;
//     }
//   }
//   return false;
// }

// A.
// const array = [false, false, false, true];
// const array = [false, false, false, false];

// console.log(or(array));
// function or(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       return true;
//     }
//   }
//   return false;
// }




// 3.上の配列を使って、
// 全部がtrueならばtrueを返すコードを書いてください！

// const random = [true, true, true, true];
// console.log(trueDouble(random));

// function trueDouble(random) {
//   for (let i = 0; i < random.length; i++) {
//     if (!random[i] === false) {
//       return true;
//     }
//   }
//   return false;
// }

// A.
// const array = [true, true, true, true];
// const array = [true, true, true, false];
// console.log(and(array));

// function and(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i]) {
//       return false;
//     }
//   }
//   return true;
// }





// 4.整数を引数と文字列を引数に引数整数分繰り返す(hiを10回繰り返す)コードを書いてください。
// 10, hi
// hi hi hi hi hi hi hi hi hi hi


// A.
// times(10, “hi”);
// function times(num, word) {
//   for (let i = 1; i <= num; i++) {
//     console.log(word);
//   }
// }




// 5.２つの配列を引数に対応したインデックス番号同士をかけた配列を作るコードを書いてください。
// [1,2,3,4,5]
// [2,3,4,5,6]
// [2,6,12,20,30]

// const array3 = [1, 2, 3, 4, 5];
// const array4 = [2, 3, 4, 5, 6];

// console.log(arrayTimes(array3, array4));

// function arrayTimes(array3, array4) {
//   let result = [];
//   for (let i = 0; i < array3.length; i++) {
//     result.push(array3[i] * array4[i]);
//   }
//   return result;
// }

// console.log(arrayTimes(array, array2));

// function arrayTimes(array, array2) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] * array2[i]);
//   }
//   return result;
// }

// 6.整数を引数にその引数の約数を配列に入れるコードを書いてください！
// 6 [1,2,3,6]
// 4 [1,2,4]

// console.log(divisor(12));
// function divisor(num) {
  //   let result = [];
  //   for (let i = 1; i <= num; i++) {
    //     if (num % i === 0) {
      //       result.push(i);
      //     }
      //   }
      //   return result;

}