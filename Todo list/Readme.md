# Todo List App with DOM & localStorage

Hey there! This is a simple web application that lets you add, mark as complete, and delete todo items. The best part? Your list is stored in your browser's localStorage, so your todos will still be there even if you reload the page!

## Features

- Add new todo items
- Mark todos as completed
- Delete todo items
- Persist data using localStorage

## Project Structure

Here's a quick look at the key files in our project:

- `index.html`: This is where all the magic begins!
- `styles.css`: This file makes our app look pretty.
- `app.js`: This is where we handle all the interactions and localStorage stuff.

## Images

Here's what our app looks like:

![Todo List UI](todolist.jpg)
![Todo List LocalStorage](todolistLocalstorage.jpg)

## Code Explanation

Here's a quick rundown of how our app works:

- `getTodoListFromLocalStorage`: This function fetches and parses the todo list from localStorage.
- `createAndAppendTodo`: This function dynamically adds todo items to the DOM.
- `onAddTodo`, `onTodoStatusChange`, and `onDeleteTodo`: These functions handle adding todos, marking them as complete, and deleting them.
- `saveTodoButton`: This button saves the todo list to localStorage.

## How to Run

Running our app is as easy as pie:

1. Open `index.html` in your favorite browser.
2. Enter a todo in the input field.
3. Click "Add" to append it to the list.
4. Check the box next to a todo to mark it as done.
5. Click the trash icon to delete a todo.
6. Click "Save" to store your todo list in localStorage.

## Technologies Used

We built our app using some cool technologies:

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome for those neat little icons
