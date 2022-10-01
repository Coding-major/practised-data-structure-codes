function mergeSortArray(array1, array2) {
  // checking if array is empty
  if (array1.length === 0) {
      return array2;
  }
  if (array2.length === 0) {
      return array1;
  }
  if (array1.length === 0 && array2.length === 0) {
      return `empty arrays`;
  }
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (array1[i] || array2[j]) {
      if (array2[j] === undefined || array1[i] < array2[j]) {
          mergedArray.push(array1[i]);
          i++;
      } else {
          mergedArray.push(array2[j]);
          j++;
      }
  }
  
  return mergedArray;
}

console.log(mergeSortArray([0,1,3,4,31], [3,4,6]));