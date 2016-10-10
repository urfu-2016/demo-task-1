
 exports.isStar = true;
  
 exports.sum = function (a, b) {
 exports.sum = function (a, b, c) {
     // Реализуйте сложение в этой функции
     if (!c) {
         c = 0;
     }
 
     return Number(a) + Number(b) + Number(c);
 };
