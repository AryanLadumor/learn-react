# 📘 React Hello World — Notes

---

# 🚀 1. Core Philosophy
## 📌 Library vs Framework
- React is a **library**, not a full framework.
- This means React can be used for specific parts of an application instead of controlling the entire project.
Examples:
- Sidebar
- Navbar
- Footer
- Small interactive UI sections
👉 You do NOT need to build a full app to use React.


## 📌 Pure JavaScript
- React is ultimately JavaScript.
- Everything written in React becomes JavaScript objects.
- JSX (gonna learn later) is just syntactic sugar over JavaScript.


## 📌 Targeted Rendering
- React controls only a specific part of the DOM.
- Usually this is a root container.

Example:

```html
<div id="root"></div>
```

👉 React injects and manages UI only inside this element.

---

# 🏗️ 2. HTML Structure (`index.html`)


## 📌 Root Element

```html
<div id="root"></div>
```

- This acts as the container where React injects UI.
- React does NOT control the whole page unless you want it to.

## 📌 CDN Injection

  React is loaded using CDN links from the official legacy React website:
    https://legacy.reactjs.org/docs/cdn-links.html

 ### Two main scripts are required:

#### ✅ 1. React (Core Library)

- Main React engine.
- Used to:

  - Create React elements
  - Handle props and state
  - Manage Virtual DOM
  - Describe UI structure

👉 Think of this as the **brain** of React.

#### ✅ 2. ReactDOM

- Bridge between React and browser DOM.
- Responsible for rendering React elements into actual HTML.

👉 Think of this as the **renderer**.

## ⚠️ Script Order Matters

Correct order:
1. React
2. ReactDOM
3. Your `app.js`

Reason:
- Your JS file uses React functions.
- If React loads after your file → errors will occur showing that .


## 📌 Future Note

Later we will use React and ReactDOM from npm packages instead of CDN.

---

# ⚛️ 3. React Core Functions

Now we will  understand the three important functions used in this Folder.


## 🧩 React.createElement()

### 📌 Purpose

Creates a **React Element** (Virtual DOM object).

Example:

```js
const heading = React.createElement("h1", {}, "Hello World");
```


### 📌 Virtual DOM Concept

- This function DOES NOT create real HTML immediately.
- It creates a JavaScript object representing UI.

Check:

```js
console.log(heading);
```

👉 You will see a JS object — part of Virtual DOM.




### 📌 Parameters

React.createElement takes 3 main arguments:

#### 1️⃣ Type (Element Type)

```js
"h1"
```

Defines which HTML element to create.

Examples:
- "div"
- "h1"
- "span"
- Custom components (later)


#### 2️⃣ Props (Properties Object)

```js
{}
```

Contains attributes or configuration.

Example:

```js
{ id: "title", className: "main-heading" }
```

Used for:
- HTML attributes
- Event handlers
- Data passing


#### 3️⃣ Children

```js
"Hello World"
```

Defines content inside the element.

Can be:
- String text
- Another React element
- Array of elements
  
After this Chapter we will use it as another reacct element and Array of Element To create Complex Structure in HTML



## 🌱 ReactDOM.createRoot()

### 📌 Purpose

Creates a React root where UI will be rendered.

Example:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

### 📌 What Happens Here?

1. Select DOM element:

```js
document.getElementById("root")
```

2. React attaches its rendering system to this container.


### 📌 Why Needed?

- React is just a JavaScript library.
- We define WHERE React controls UI.

👉 This function defines the boundary between:
- Normal HTML
- React-managed UI

```html
  <div id="rootAbove">
    <h4>Above The Root</h4>
  </div>
     <div id="root" >
          <!-- Here react Element will be injected -->
     </div>
  <div id="rootBelow">
      <h4>Below The Root</h4>
  </div>
```
- here we injected it at the root 

## 🎯 root.render()

### 📌 Purpose

Renders React element into actual DOM.

Example:

```js
root.render(heading);
```

### 📌 Internal Working

1. React takes Virtual DOM object (`heading`).
2. Converts it into real HTML structure.
3. Injects it inside root container.
4. Browser displays:

```
Hello World
```

### 📌 Key Concept

Before render:

👉 Only JavaScript object exists.

After render:

👉 Real DOM element appears in browser.

---

# ✅ Summary

- React.createElement() → Creates Virtual DOM element.
- ReactDOM.createRoot() → Defines mount location.
- root.render() → Converts Virtual DOM into real HTML.

---

Now from here we will discuss the complex structure created with the `createElement` and will discuss about complexity of this on next Chapter