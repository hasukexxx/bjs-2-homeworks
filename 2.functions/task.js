function getArrayParams(...arr) {
   let min = arr[0];
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      } else if (arr[i] > max) {
         max = arr[i];
      }
   };
   let sum = arr.reduce(function (a, b) {
      return a + b;
   });
   return {
      min: min,
      max: max,
      avg: parseFloat((sum / (arr.length)).toFixed(2))
   };
}


function summElementsWorker(...arr) {
   let sum = 0;
   if (arr.length > 0) {
      sum = arr.reduce(function (a, b) {
         return a + b;
      })
   };
   return sum;
}


function differenceMaxMinWorker(...arr) {
   let difference = 0;
   if (arr.length > 0) {
      difference = Math.max(...arr) - Math.min(...arr);
   };
   return difference;
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0;
   let sumOddElement = 0;
   if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
         } else {
            sumOddElement += arr[i];
         }
      };
      return sumEvenElement - sumOddElement;
   } else {
      return 0
   };
}

function averageEvenElementsWorker(...arr) {
   let sumEvenElement = 0;
   let countEvenElement = 0;
   if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
         }
      };
      return sumEvenElement / countEvenElement;
   } else {
      return 0;
   };
}

function makeWork(arrOfArr, func) {
   let maxWorkerResult = func(...arrOfArr[0]);
   for (let i = 0; i < arrOfArr.length; i++) {
      let result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) {
         maxWorkerResult = result;
      }
   };
   return maxWorkerResult;
}