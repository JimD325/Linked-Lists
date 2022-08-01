import { Collection, display } from "./Collection";

// ES5 prototype
// const LinkedList = function() {};
// LinkedList.prototype.insert(item) {};

// class
// interface

// Three parts of a variable:
// let name: type = value;

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined; // or head
  butt: Node<T> | undefined;
  insert(item: T) {
    this.start = {
      item: item,
      next: this.start,
    };
  }

  includes(item: T): boolean {
    // What is the first item?
    // this.start
    let tracker = this.start;

    // if (tracker?.item === item) {
    //   return true;
    // }
    // // check the second item
    // if (tracker?.next?.item === item) {
    //   return true;
    // }
    // // check the third item
    // if (tracker?.next?.next?.item === item) {
    //   return true;
    // }
    // // check the fourth item
    // if (tracker?.next?.next?.next?.item === item) {
    //   return true;
    // }
    while (tracker !== undefined /* there is a value */) {
      // do this thing
      if (tracker.item === item) {
        return true;
      }
      // move forward
      tracker = tracker.next;
    }

    // What is the last thing to do?
    return false;
  }

  toString(): string {
    // For each item
    //   get its string using `display(item)`
    //   Put it inside { }
    //   Put an arrow between all items
    //   End the entire list with a "NULL"
    let str = "";

    let tracker = this.start;
    while (tracker !== undefined) {
      // Add this node to the string
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> `;
      tracker = tracker.next;
    }

    str += "NULL";

    return str;
  }

  append(value: T): void {
    const newNode = { // this is the new node you will be appending
      item: value,
      next: undefined, // need to be undefined because there will be nothing at the end, because the new node will be the new end.
    }
    let lastNode = this.start; // start at the head
    if (lastNode) { // if last node is true
      while (lastNode.next) {  // then for every instance where lastNode.next is true, go through the LL and set lastNode = to the next node. 
        lastNode = lastNode.next;
      }
      lastNode.next = newNode; // when lastNode.next is no longer returning true, set lastNode equal to the newNode.
    }
    if (!lastNode) {
      throw new Error('Linked List does not exist');
    }
  }

  
  insertBefore(value: T, newValue: T) {
    let located = false;
    let tracker = this.start;
    while (tracker) {           // while tracker returns true
      if (tracker.next?.item === value && located === false) { // if the node after our current node has a value equal to the value we are looking for, and if it is true that we have not yet located our new value in the LL:
        const nextNode = tracker.next; // then store the next node
        located = true; // set located to true
        tracker.next = { // then also set the next of the node we are currently in equal to the newValue being inserted.
          item: newValue,
          next: nextNode,
        }
      }
      else if (tracker.item === value && located === false){ // if the node we are looking for is the first node in the linked list
         located = true;
         const nextNode = this.start;
         this.start = {
          item: newValue,
          next:nextNode,
         }
      }
      tracker = tracker.next; // need to do this in the while loop to go to the next node every single time if the if statement above is not triggered. Otherwise your test will run forever and you wont know whats happening..... =(
    }
    if (located === false) {
      throw new Error('target node not found');
    }
  }


  insertAfter(value: T, newValue: T) {
    let located = false; // this has a very similar start to insert before. 
    let tracker = this.start;
    while (tracker) {
      if (tracker.item === value && located === false) {
        located = true;
        const nextNode = tracker.next;
        tracker.next = {
          item: newValue,
          next: nextNode,
        }
      }
      tracker = tracker.next;
    }
    if (located === false) {
      throw new Error('target node not found');
    }
  }
}
// A node tracks one item and the next node
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}