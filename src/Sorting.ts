import { Item } from "./Item.js";
import { delay } from "./util.js";

export async function bubbleSort(array: Item[], fn: Function) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].getValue() > array[j].getValue()) {
        let aux = array[i].getValue();
        array[i].setValue(array[j].getValue());
        array[j].setValue(aux);

        await delay(50);

        fn(array);
      }
    }
  }
}
