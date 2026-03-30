// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
const h1Element = document.querySelector("h1");
console.log("Practice 1 - h1 element:", h1Element);

// 2. All elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log("Practice 2 - all .content elements:", contentElements);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("Practice 3 - contact form:", contactForm);

// 4. The email input
const emailInput = document.querySelector("#email");
console.log("Practice 4 - email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav ul li");
console.log("Practice 5 - nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("Practice 6 - first .nav-link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelectorAll("p");
console.log("Practice 7 - last paragraph:", lastParagraph[lastParagraph.length - 1]);

// DOM Traversal Practice
const nav = document.querySelector("nav");
console.log("nav:", nav);

// 1. Select the header, then navigate to the nav inside it
const headerElement = document.querySelector("header");
const headerNav = headerElement.querySelector("nav");
console.log("Traversal 1 - header to nav:", headerNav);

// 2. Select the first nav-link, then get its parent li
const firstNavLinkElement = document.querySelector(".nav-link");
const firstNavLinkParent = firstNavLinkElement.parentElement;
console.log("Traversal 2 - first nav-link parent li:", firstNavLinkParent);

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
const articleNextSibling = article.nextElementSibling;
console.log("Traversal 3 - article next sibling:", articleNextSibling);

// 4. Select the ul, then get all its child li elements
const navList = document.querySelector("nav ul");
const navListItems = navList.children;
console.log("Traversal 4 - ul child li elements:", navListItems);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const footerParent = footer.parentElement;
const footerBody = footerParent.tagName === "BODY" ? footerParent : footerParent.parentElement;
console.log("Traversal 5 - footer parent:", footerParent);
console.log("Traversal 5 - footer up to body:", footerBody);

// Task 9.3: Modifying Content
// Exercise 1: Text Content
const h1 = document.querySelector("h1");
console.log("Text Content - textContent:", h1.textContent);
console.log("Text Content - innerText:", h1.innerText);
h1.textContent = "Modified DOM Practice Title";
console.log("Updated h1 textContent:", h1.textContent);

// Exercise 2: HTML Content
const articleElement = document.querySelector("article");
console.log("Original article innerHTML:", articleElement.innerHTML);
articleElement.innerHTML = `
  <h2>Updated Article</h2>
  <p>This is new content added via innerHTML.</p>
  <p class="content">A new paragraph inside the article.</p>
`;

// Exercise 3: Attributes
const firstLinkElement = document.querySelector(".nav-link");
console.log("Original href attribute:", firstLinkElement.getAttribute("href"));
firstLinkElement.setAttribute("href", "https://example.com");
firstLinkElement.setAttribute("target", "_blank");
console.log("Updated href attribute:", firstLinkElement.href);
console.log("Has target attribute?", firstLinkElement.hasAttribute("target"));
firstLinkElement.removeAttribute("target");
console.log("Has target after removal?", firstLinkElement.hasAttribute("target"));

// Data attributes example
firstLinkElement.dataset.id = "123";
firstLinkElement.dataset.category = "nav";
console.log("Data attributes:", firstLinkElement.dataset);

// Exercise 4: Styles
const container = document.querySelector(".container");
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";
Object.assign(container.style, {
  backgroundColor: "#333",
  color: "white",
  padding: "20px"
});
console.log("Updated container styles:", container.style.cssText);

// Task 9.4: Adding & Removing Elements
// Exercise 1: Creating Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";
articleElement.appendChild(newParagraph);

const clonedParagraph = newParagraph.cloneNode(true);
clonedParagraph.textContent = "This is a cloned paragraph inserted before the first paragraph.";
const firstArticleParagraph = articleElement.querySelector("p");
articleElement.insertBefore(clonedParagraph, firstArticleParagraph);

const prependedParagraph = document.createElement("p");
prependedParagraph.textContent = "Prepended paragraph at the top of the article.";
articleElement.prepend(prependedParagraph);

const appendedParagraph = document.createElement("p");
appendedParagraph.textContent = "Appended paragraph at the end of the article.";
articleElement.append(appendedParagraph);

const siblingParagraph = document.createElement("p");
siblingParagraph.textContent = "Paragraph inserted after the first existing paragraph.";
firstArticleParagraph.after(siblingParagraph);

// Exercise 2: Removing Elements
const tempParagraph = document.createElement("p");
tempParagraph.textContent = "This temporary paragraph will be removed.";
articleElement.appendChild(tempParagraph);
tempParagraph.remove();

const navElement = document.querySelector("nav");
const lastNavItem = navElement.querySelector("li:last-child");
if (lastNavItem) {
  lastNavItem.parentElement.removeChild(lastNavItem);
}

// Exercise 3: Cloning Elements
const navItem = document.querySelector(".nav-link")?.parentElement;
if (navItem) {
  const clone = navItem.cloneNode(true);
  const cloneLink = clone.querySelector("a");
  if (cloneLink) {
    cloneLink.textContent = "New Link";
  }
  document.querySelector(".nav-list")?.appendChild(clone);
}

// Build: addNavItem function
function addNavItem(text, href) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.className = "nav-link";
  anchor.href = href;
  anchor.textContent = text;
  li.appendChild(anchor);
  document.querySelector(".nav-list")?.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Task 10.1: Event Listeners
// Exercise 1: Basic Events
const clickButton = document.createElement("button");
clickButton.textContent = "Click Me";
document.body.appendChild(clickButton);

clickButton.addEventListener("click", function() {
  console.log("Button clicked!");
});

clickButton.addEventListener("click", () => {
  console.log("Clicked again!");
});

function handleClick() {
  console.log("Handled!");
}
clickButton.addEventListener("click", handleClick);
clickButton.removeEventListener("click", handleClick);

// Exercise 2: Event Types
const nameInput = document.querySelector("#name");
if (nameInput) {
  nameInput.addEventListener("focus", () => {
    console.log("Name input focused");
  });
  nameInput.addEventListener("blur", () => {
    console.log("Name input blurred");
  });
  nameInput.addEventListener("input", (event) => {
    console.log("Name input changed:", event.target.value);
  });
}

const emailInputField = document.querySelector("#email");
if (emailInputField) {
  emailInputField.addEventListener("change", () => {
    console.log("Email input changed (on blur):", emailInputField.value);
  });
}

const contactFormElement = document.querySelector("#contact-form");
const nameInputField = document.querySelector("#name");

if (nameInputField) {
  nameInputField.addEventListener("input", (event) => {
    const value = event.target.value;
    if (value.length < 2) {
      showError(nameInputField, "Name must be at least 2 characters");
    } else {
      clearError(nameInputField);
    }
  });
}

if (emailInputField) {
  emailInputField.addEventListener("input", (event) => {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(emailInputField, "Please enter a valid email");
    } else {
      clearError(emailInputField);
    }
  });
}

if (contactFormElement) {
  contactFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormSubmit();
  });
}

document.addEventListener("click", function(event) {
  console.log("Target:", event.target);
  console.log("Current Target:", event.currentTarget);
  console.log("Type:", event.type);
  console.log("Position:", event.clientX, event.clientY);

  if (event.target.closest("a")) {
    event.preventDefault();
    event.stopPropagation();
  }
});

document.addEventListener("keydown", function(event) {
  console.log("Key:", event.key);
  console.log("Code:", event.code);
  console.log("Shift:", event.shiftKey);
  console.log("Ctrl:", event.ctrlKey);
  console.log("Alt:", event.altKey);

  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    alert("Saved!");
  }

  if (event.key === "Escape") {
    clearFormInputs();
  }

  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    submitContactForm();
  }
});

window.addEventListener("resize", () => {
  console.log("Window resized to", window.innerWidth, "x", window.innerHeight);
});

// Build: Click Counter
const counterSection = document.createElement("section");
const counterHeading = document.createElement("h2");
counterHeading.textContent = "Click Counter";
const counterDisplay = document.createElement("div");
counterDisplay.id = "counter-display";
counterDisplay.textContent = "0";
const incrementButton = document.createElement("button");
incrementButton.textContent = "+";
const decrementButton = document.createElement("button");
decrementButton.textContent = "-";
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

counterSection.append(counterHeading, counterDisplay, incrementButton, decrementButton, resetButton);
document.body.appendChild(counterSection);

let count = 0;
function updateCounter() {
  counterDisplay.textContent = String(count);
}

incrementButton.addEventListener("click", () => {
  count += 1;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  if (count === 0) {
    return;
  }
  count -= 1;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Task 10.3: Event Delegation - Task List
const taskSection = document.createElement("section");
taskSection.innerHTML = `
  <h2>Task List</h2>
  <form id="task-form">
    <input type="text" id="task-input" placeholder="New task" />
    <button type="submit">Add Task</button>
  </form>
  <ul id="task-list"></ul>
`;
document.body.appendChild(taskSection);

const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

if (taskForm) {
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput?.value.trim();
    if (!taskText) {
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);
    taskList?.appendChild(li);
    if (taskInput) {
      taskInput.value = "";
    }
  });
}

if (taskList) {
  taskList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete-task");
    if (deleteButton) {
      const item = deleteButton.closest("li");
      item?.remove();
      return;
    }

    const clickedItem = event.target.closest("li");
    if (!clickedItem || !taskList.contains(clickedItem)) {
      return;
    }

    clickedItem.classList.toggle("completed");
  });
}

function showError(input, message) {
  if (!input) {
    return;
  }
  input.classList.add("error");
  const next = input.nextElementSibling;
  if (next?.classList.contains("error-message")) {
    next.textContent = message;
    return;
  }

  const errorElement = document.createElement("span");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  input.insertAdjacentElement("afterend", errorElement);
}

function clearError(input) {
  if (!input) {
    return;
  }
  input.classList.remove("error");
  const next = input.nextElementSibling;
  if (next?.classList.contains("error-message")) {
    next.remove();
  }
}

function clearSuccess() {
  const existing = document.querySelector(".success-message");
  if (existing) {
    existing.remove();
  }
}

function showSuccess(message) {
  clearSuccess();
  if (!contactFormElement) {
    return;
  }
  const successElement = document.createElement("div");
  successElement.className = "success-message";
  successElement.textContent = message;
  contactFormElement.prepend(successElement);
  setTimeout(() => {
    successElement.remove();
  }, 3000);
}

function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

function validateFormData(data) {
  let isValid = true;
  if (!data.name || data.name.trim().length < 2) {
    showError(nameInputField, "Name must be at least 2 characters");
    isValid = false;
  } else {
    clearError(nameInputField);
  }

  if (!data.email || !validateEmail(data.email)) {
    showError(emailInputField, "Please enter a valid email");
    isValid = false;
  } else {
    clearError(emailInputField);
  }

  return isValid;
}

function handleFormSubmit() {
  if (!contactFormElement) {
    return;
  }

  clearSuccess();
  const formData = new FormData(contactFormElement);
  const data = Object.fromEntries(formData.entries());

  if (validateFormData(data)) {
    console.log("Form data:", data);
    showSuccess("Form submitted successfully!");
    contactFormElement.reset();
  }
}

function submitContactForm() {
  if (!contactFormElement) {
    return;
  }
  if (typeof contactFormElement.requestSubmit === "function") {
    contactFormElement.requestSubmit();
  } else {
    const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
    contactFormElement.dispatchEvent(submitEvent);
  }
}

function clearFormInputs() {
  if (nameInputField) {
    nameInputField.value = "";
    clearError(nameInputField);
  }
  if (emailInputField) {
    emailInputField.value = "";
    clearError(emailInputField);
  }
}

