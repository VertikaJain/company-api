# Company Application

## REST APIs
  1. `GET` - to display Employee list.
  2. `GET` - to show project list in Drop Down option of Add Employee.
  3. `POST` - to save New Employee data -> Name, Email, Phone and Project Title.
  4. `POST` - to save New Project data -> Project title and Key.
  
## Technology Stack
  1. NodeJS
  2. Express
  3. MongoDB
  4. BootStrap
  5. Mongoose library
  
## Project Structure

  1. `server.js` file to initialize the project (starts server).
  2. `routes` folder representing all the API routes.
  4. `controllers` folder includes the backend logic for Employee and Project, handling the functionality.
  5. `models` folder has Schema and Model defined for Employee and Project.
  6. `index.html` includes the front-end, designing and calls JS scripts for dynamic manipulation. 
  7. `app.js` includes all the AJAX calls, integrating the HTML part with the APIs on the backend.
  8. `.env` hidden file that includes the DATABASE_URL for connecting to MongoDB using Mongoose.
