# ⚛️ React Chapter-3 : creating Complex Structure

>Initially You can go 2X Reading this as it will have some Similar concept as Chapter 2 But the Structure of Element Will Be complex.
---
## 1. Complex Structure


* **Arguments**: `createElement(type , props , children)`
    1. **Type**: The first argument defines the type of element (e.g., "div", "h1").
    2. **Props**: The second argument is for "props" (properties) like `id` or custom attributes (e.g., `xyz: "abc"`).
    3. **Children**: The third argument defines what is inside the element. 
       1. This can be a string, for a text in HTML element
       2.  Another React element for children parent relationship
       3. An array of elements to create sibling relationships.
* **Complex Nesting**: To create deep structures, we nest `React.createElement` calls inside arrays.

```javascript
/**
 * creating Complex Struture
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I Am Heading1<h1>
 *          <h2>I Am Heading2<h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I Am Heading1<h1>
 *          <h2>I Am Heading2<h2>
 *      </div>
 * </div>
 *
 * to create this Structure:
 * --> child1 and child2 should be array in parent to be a sibling
 * --> h1 and h2 heading should be inside child1 and child2 as an array to be a sibling
 * 
 * pseudo code : represents only 3rd arg of createElement funtion
 * parent([  child1([h1("text") , h2("text")]) , child2([h1("text") , h2("text")])  ]) 
 */


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am Heading1"),
    React.createElement("h2", {}, "I am Heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am Heading1"),
    React.createElement("h2", {}, "I am Heading2"),
  ]),
]);

```

---

## 📺2. Rendering to the DOM

* **DOM creation** :  Here we have created a `VirtualDOM` By `createRoot` Now on Render `RealDom` will have Same this Structure but in HTML 

* **Initialization**: `ReactDOM.createRoot` is used to identify where the `#root` of the application is located in the HTML.

* **Conversion**: When `root.render(parent)` is called, React takes the JavaScript object(`Parent` in this case) and converts it into actual HTML nodes.

* **Replacement**: Any existing content inside the `#root` div present in the html file  is replaced by the React element once rendered as the script tag in html files runs.

![alt text](../images/image.png)

## ⚠️ Problem With Manual Structure

As the project grows:

- Managing many element manually becomes complex.
- Linking scripts and dependencies becomes messy.just think how it will be to manage more Files
- Performance optimization becomes harder.

👉 We cannot keep increasing complexity manually .So we need A easy way.


---

## 3. Need for Better Structure (Intro To Parcel  our next Chapter)

Instead of manually managing everything, we will use a tool called **Parcel**.

### 📌 What is Parcel?

Parcel is a build tool (bundler) that helps us:

- Manage project structure automatically.
- Bundle multiple files together.
- Optimize code for development and production.
- Handle dependencies easily.

👉 Parcel reduces complexity and helps maintain clean architecture.

> For now  before Ending the Chapter just understand that Parcel will simplify project setup.

