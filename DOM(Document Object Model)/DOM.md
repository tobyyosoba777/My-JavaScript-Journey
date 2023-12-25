JavaScript provides a variety of DOM manipulation methods to interact with HTML documents. Here's a list of commonly used JavaScript DOM manipulation methods:

 Selecting Elements:
        document.getElementById(id): Returns the element with the specified ID.
        document.getElementsByClassName(className): Returns a NodeList of elements with the specified class name.
        document.getElementsByTagName(tagName): Returns a NodeList of elements with the specified tag name.
        document.querySelector(selector): Returns the first element that matches the specified CSS selector.
        document.querySelectorAll(selector): Returns a NodeList of all elements that match the specified CSS selector.

 Creating Elements:
        document.createElement(tagName): Creates a new HTML element with the specified tag name.
        document.createTextNode(text): Creates a new text node with the specified text.

 Manipulating Elements:
        element.innerHTML: Gets or sets the HTML content of an element.
        element.innerText or element.textContent: Gets or sets the text content of an element.
        element.setAttribute(name, value): Sets the value of an attribute on an element.
        element.getAttribute(name): Gets the value of an attribute on an element.
        element.appendChild(node): Appends a child node to an element.
        element.removeChild(node): Removes a child node from an element.
        element.replaceChild(newNode, oldNode): Replaces a child node with another node.
        element.classList.add(className): Adds a class to an element.
        element.classList.remove(className): Removes a class from an element.
        element.classList.toggle(className): Toggles the presence of a class on an element.
        element.style.property: Gets or sets the value of a style property on an element.

    Traversing the DOM:
        element.parentNode: Returns the parent node of an element.
        element.childNodes: Returns a NodeList of child nodes of an element.
        element.firstChild and element.lastChild: Return the first and last child nodes of an element.
        element.nextSibling and element.previousSibling: Return the next and previous siblings of an element.
        element.parentElement: Returns the closest parent element.

    Events:
        element.addEventListener(event, handler): Attaches an event handler to an element.
        element.removeEventListener(event, handler): Removes an event handler from an element.
        Common events: click, change, submit, keydown, keyup, etc.

These are just some of the fundamental DOM manipulation methods in JavaScript. There are many more methods and properties available for working with the DOM, depending on the specific requirements of your application.