# 01-challenge-api-rest-nodejs
This API will function as a CRUD for a todo app.
Funcionalities:
- [ ] Create a task
- [ ] List all tasks
- [ ] Update a task by id
- [ ] Remove a task by id
- [ ] Mark a task as completed
- [ ] Import massive tasks by a .csv


First Commit:
1. Created server
2. Setted server to listen on port 3333
3. Created dev script with flag --watch

Structuring Routes - List/Create:
1. Created file routes.js
2. Created a list variable for storing the tasks
3. Yet not decided about Stateless or Statefull application, but probably Statefull

Created a response if request on route GET/tasks: 
1. Destructuring the response object to get the method and url
2. Define a response if the method is a GET and the url is /tasks
3. Converted the response data (tasks) to a JSON string structure for the front-end
4. Setted the reponse header of Content-type to be application/json

Created a response if request on route POST/tasks:
1. Push the Array object of the request to the Array of tasks on the application memory
2. Defined a 201 status code - "Created" - as a parameter to the method writeHead of the response
3. Defined a 404 status code - "Not Found" - as a parameter to the method writeHead of the response 