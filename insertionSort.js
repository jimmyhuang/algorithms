// In insertion sort elements are bubbled into the sorted section, while in bubble sort the maximums are bubbled out of the unsorted section

// bubble in backwards through sorted
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    // console.log(i)
    while (array[j] < array[j - 1]) {
      [array[j-1], array[j]] = [array[j], array[j-1]]
      j -= 1;
    }
  }
  return array;
}

// bubble in outwards from the unsorted
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array;
}

// bubbleSort([8,5,2,9,5,6,3])
insertionSort([8,5,2,9,5,6,3])

//  In bubble sort in ith iteration you have n-i-1 inner iterations