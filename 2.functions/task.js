function getArrayParams(...arr) {
   let min = arr[0];
   let max = arr[0];
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] < min) {
         min = arr[i];
      } else if (arr[i] > max) {
         max = arr[i];
      }
   };
   return {
      min: min,
      max: max,
      avg: parseFloat((sum / (arr.length)).toFixed(2))
   };
}


function summElementsWorker(...arr) {
   return arr.reduce((acc, num) => acc + num, 0);
}


function differenceMaxMinWorker(...arr) {
   if (arr.length === 0) {
      return 0;
   } else {
      return Math.max(...arr) - Math.min(...arr);
   };
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0;
   let sumOddElement = 0;
   for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
         } else {
            sumOddElement += arr[i];
         }
      };
      return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
   let sumEvenElement = 0;
   let countEvenElement = 0;
   if (arr.length === 0) {
      return 0;
   } else {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
         }
      };
      return sumEvenElement / countEvenElement;
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