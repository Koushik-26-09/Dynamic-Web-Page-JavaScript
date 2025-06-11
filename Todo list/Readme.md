
# 📋 Todo List App with DOM & localStorage

A simple and interactive Todo List web application built using **HTML**, **CSS**, and **Vanilla JavaScript**. The app allows users to add, mark as completed, delete, and persist todo items using the browser's localStorage.

---

## 📸 Screenshots

### ✅ Todo List UI  
![Todo List UI](todolist.jpg)

### 📦 Todo List in LocalStorage  
![Todo List LocalStorage](todolistLocalstorage.jpg)

---

## ✨ Features

- ✅ Add new todo items
- ✅ Mark todos as completed
- ✅ Delete todo items
- ✅ Persist data using **localStorage**
- ✅ Smooth, dynamic DOM updates without page reloads

---

## 📁 Project Structure

```plaintext
📦 Todo-List-App/
 ┣ 📄 index.html
 ┣ 📄 styles.css
 ┣ 📄 script.js
 ┣ 📄 todolist.jpg
 ┣ 📄 todolistLocalstorage.jpg
 ┗ 📄 README.md
```

---

## ⚙️ Code Overview

### 📌 getTodoListFromLocalStorage()
- Fetches the todo list from localStorage.
- Parses it from JSON to an array.
- If not found, initializes with an empty list.

### 📌 createAndAppendTodo(todo)
- Dynamically creates a `<li>` element for each todo.
- Adds a checkbox, label, and delete icon.
- Binds event listeners for status change and deletion.

### 📌 onAddTodo()
- Retrieves user input.
- Validates input.
- Creates a new todo object.
- Updates the DOM and todo list array.

### 📌 onTodoStatusChange(checkboxId, labelId)
- Toggles the `.checked` class on the corresponding label when checkbox is clicked.

### 📌 onDeleteTodo(todoId)
- Removes the todo from the DOM.
- Removes the todo from the array.
- Updates localStorage on save.

### 📌 saveTodoButton
- Saves the current state of todoList to localStorage in JSON format.

---

## 🚀 How to Run

1. Clone/download the repository.
2. Open `index.html` in any modern web browser.
3. Type a task in the input box.
4. Click **Add** to create a new todo.
5. Mark it complete by checking the box.
6. Delete an item by clicking the trash icon.
7. Click **Save** to store the list in localStorage.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **Font Awesome** (for delete icons)

---

## 👨‍💻 Author

Koushik

---
