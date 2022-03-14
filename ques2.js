//function to merge the two sorted arrays and return the mergedSortedArray
function mergeSortedArrays(A, B, p, q) {
  let mergedArray = [];
  let firstArrayInd = 0,
    secondArrayInd = q - 1;

  while (firstArrayInd < p && secondArrayInd >= 0) {
    if (A[firstArrayInd] <= B[secondArrayInd]) {
      mergedArray.push(A[firstArrayInd]);
      firstArrayInd += 1;
    } else {
      mergedArray.push(B[secondArrayInd]);
      secondArrayInd -= 1;
    }
  }

  while (firstArrayInd < p) {
    mergedArray.push(A[firstArrayInd]);
    firstArrayInd += 1;
  }
  while (secondArrayInd >= 0) {
    mergedArray.push(B[secondArrayInd]);
    secondArrayInd -= 1;
  }
  return mergedArray;
}

// the function to get the median from the two arrays
function getMedian(A, B, p, q) {
  let totalLength = p + q;

  let mergedArray = mergeSortedArrays(A, B, p, q);
  let median;
  if (totalLength % 2 == 0) {
    median =
      (mergedArray[totalLength / 2 - 1] + mergedArray[totalLength / 2]) / 2;
  } else {
    median = mergedArray[totalLength - 1 / 2];
  }
  return median;
}
