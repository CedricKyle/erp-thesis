// Importing the express module
const express = require('express')

// Creating an instance of the express application
const app = express()

// Setting the port to 3000
const port = 3000

// Middleware to parse JSON bodies in the request
app.use(express.json())

// Defining a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Starting the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
