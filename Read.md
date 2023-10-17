Database Configuration:-
Configure the database connection by updating the dbConnect.js file that is in config folder.
 Replace the MONGO_URL with your MongoDB connection URL. 
# Getting started
Running the Application:
npm run server


API Endpoints:-
The application provides the following API endpoints:
This is the base URL and following restfulapi pattern
app.use("/api/v1/hotels/", hotelRoutes); 
POST /: Create a new hotel.
GET /: Retrieve all hotels with optional filtering and sorting.
PUT /:id: Update a hotel by ID.
DELETE /:id: Delete a hotel by ID.
GET /:id: Retrieve a single hotel by ID.

Error Handling:-
The application includes error handling using the globalErrorHandler.js middleware.
It handles errors that occur during the application's execution and sends an appropriate response.