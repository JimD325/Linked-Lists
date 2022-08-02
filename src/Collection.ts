export interface Collection<T> {
  //T = num/int/          : what you return
  insert(t: T): void;
  includes(t: T): boolean;
  toString(): string;
  append(t: T): void;
  insertBefore(value: T, newValue: T): void;
  insertAfter(value: T, newValue: T): void; 
  kthFromEnd(k: number): any;
}

export function display(t: any): string {
  if (t?.toString) {
    return t.toString();
  }
  return `${t}`;
}
