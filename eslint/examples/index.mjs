export function bubbleSort(array) {
  const lentgh = array.length;

  for (let i = 0; i < lentgh; i++) {
    for (let j = 0; j < lentgh - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
