 **JavaScript Library Manager**
A web application for managing a personal library, built with pure HTML, CSS Grid/Flexbox, and vanilla JavaScript. This project focuses on DOM manipulation, client-side state management, and event delegation.

**Key Features:**

✅ Add new books to your collection.
✅ Display books in a dynamic table.
✅ Delete books individually.
✅ Data validation (title, author, pages).
✅ Interface design based on CSS Grid.

**Tech Stack**
This project was developed without any frameworks or external libraries, using only fundamental web technologies:

HTML5: For the semantic structure of the content.
CSS3:
CSS Grid: For the main page layout and the structure of the book rows.
Flexbox: For aligning elements within components, such as the button and the form.
JavaScript (Vanilla): For all application logic: data management, dynamic rendering, event handling, and validation.
🚀 Getting Started
Follow these simple steps to get a copy of the project up and running on your local machine.

**Prerequisites**
A modern web browser (Chrome, Firefox, Edge, etc.).
No local server is required. You can open index.html directly in your browser.
1)Installation
Clone this repository to your local machine using Git: git clone https://github.com/TU_USUARIO/nombre-del-repo.git

2)Navigate to the project folder: cd nombre-del-repo
3) Open the index.html file in your web browser.
And that's it! The application should be fully functional.

**How It Works**
**Code Architecture**
The project follows a modular and clear structure:
index.html: Defines the main structure of the page, including the main container (<div class="container">) and the modal dialog (<dialog>).
style.css: Contains all presentation logic. It uses CSS Grid for the overall page layout and Flexbox for specific components. The design is intentionally not responsive to focus on mastering a complex desktop layout.
js.js:
State Management: The miLibreria array acts as the "single source of truth" for the application's data.
Rendering: The mostrarLibro(miLibreria) function clears and recreates the DOM content to sync it with the state of the array.
Event Handling: Event delegation is used on the main container to handle clicks on the delete checkboxes, which is efficient for dynamically generated elements.
Limitations and Future Improvements

**Known Limitations**
Desktop-Optimized Design: The layout is optimized for desktop and does not adapt to mobile screen sizes. This was a deliberate decision to focus on implementing a complex CSS Grid layout.
Data Persistence: Book data is stored in an in-memory array. If the page is reloaded, all changes will be lost.
