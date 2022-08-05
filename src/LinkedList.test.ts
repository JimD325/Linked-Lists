import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("Can successfully instantiate an empty linked list", () => {
  it("runs my custom test", () => {
    const list = new LinkedList<string>();
    expect(list).toBeDefined();
  });
});


describe("Can properly insert into the linked list", () => {
  it("runs my custom test", () => {
    const list = new LinkedList<string>();
    list.insert("Test");
    expect(list.includes("Test"));
    console.log("Properly Inserted one into the linked list");
  });
});

// describe("The head property will properly point to the first node in the linked list", () => {
//   it("runs my custom test", () => {
//     const list: Collection<string> = new LinkedList<string>();
//     expect(list).toBeDefined();
//   });
// });

describe("Can properly insert multiple nodes into the linked list", () => {
  it("runs my custom test", () => {
    const list= new LinkedList<string>();
    list.insert("Test");
    list.insert("Test Again");
    list.insert("Test Yet Again");
    expect(list.includes("Test"));
    expect(list.includes("Test Again"));
    expect(list.includes("Test Yet Again"));
    console.log("Properly Inserted multiples into the linked list");
  });
});

describe("Will return true when finding a value within the linked list that exists", () => {
  it("runs my custom test", () => {
    const list= new LinkedList<string>();
    list.insert("Zayah");
    expect(list.includes("Zayah")).toBe(true);
  });
});

describe("Will return false when searching for a value in the linked list that does not exist", () => {
  it("runs my custom test", () => {
    const list= new LinkedList<string>();
    expect(list.includes("Zayah")).toBe(false);
  });
});

describe("Can properly return a collection of all the values that exist in the linked list", () => {
  it("runs my custom test", () => {
    const list= new LinkedList<string>();
    list.insert("Zayah");
    list.insert("Derek");
    list.insert("Luis");
    console.log(list.toString());
    expect(list.toString()).toEqual("{ Luis } -> { Derek } -> { Zayah } -> NULL");
  });
});

