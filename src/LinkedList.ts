import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined;
  // TODO
  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }
  includes(item: T): boolean {
    let tracker = this.start;
    while(tracker !== undefined) {
      if(tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }
  toString(): string {
    let str = '';
    let tracker = this.start;

    while(tracker !== undefined) {
      const strItem = display(tracker.item);
      str += `{ ${tracker.item} } -> `;
      tracker = tracker.next;
    }
    str += 'NULL';
    return str;
  }
}
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}