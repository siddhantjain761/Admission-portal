# Admission-portal
The admission portal has been developed using Node.js and Express.js for the server-side, and MongoDB as the database management system.
This technology stack provides a scalable, efficient, and flexible solution for managing the admission process. Node.js allows for non-blocking I/O, making it ideal for handling multiple requests simultaneously, while Express.js provides a simple and flexible framework for building web applications. MongoDB's document-oriented database structure enables flexible schema design and easy querying of data. Overall, this technology stack offers a powerful and modern solution for building a robust and user-friendly admission portal.
The specific versions used are Node.js version 18.16.0 and Embedded JavaScript Templates (EJS) for server-side rendering. 


For security and middleware :
  To generate tiken install : npm i         jsonwebtoken and require it in controller

  To get the token in middleware/auth.js install package:
  npm i cookie-parser
  
  In this hands-on, we saw how we can perform a session-based authentication in Express.js. We started by creating a new folder on the local machine. Initializing 
  different commands, we created a package.json file for package installations

  Post that, we created a middleware function that would check if the user is logged in or not (if the session still exists or is destroyed). Then, adding a middleware 
  in the route for loading the welcome page, we started the server and checked if the signup process and session creation process were working as expected. Then we 
  added the routes and the required checks for login and logout.

  Finally, we tested out the entire authentication process by signing up, logging in, logging out, entering invalid credentials, etc.



