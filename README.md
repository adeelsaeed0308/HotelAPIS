npm install --save-dev sequelize-cli
npm install --save pg pg-hstore
npm install --save sequelize sequelize-auto

npx sequelize-cli init

npx sequelize-auto -h <db-host> -d <db-name> -u <db-username> -x <db-password> --dialect postgres --tables <table1>,<table2>,<table3> --models-path models
npx sequelize-auto -h localhost -d reno -u postgres -x 1234 -p 5432 --dialect --tables Users --models-path models
postgres --models-path models --no-header
npx sequelize-cli db:migrate
npx sequelize-cli migration:generate --name create-admin-table
npx sequelize-cli migration:generate --name AddColumnToUsers
npx sequelize-cli migration:generate --name RemoveColumnFromUsers
npx sequelize-cli seed:generate --name categories
npx sequelize-cli db:seed:all
npx sequelize-cli seed:generate --name movies
npx sequelize-cli model:generate --name Invoice --attributes userId:INTEGER,jobId:INTEGER,status:INTEGER,clientId:INTEGER










Database Configuration:-
Configure the database connection by updating the dbConnect.js file that is in config folder.
Replace the MONGO_URL with your MongoDB connection URL.

# Getting started

Running the Application:
npm run server

# API Endpoints:-

The application provides the following API endpoints:
This is the base URL and following restfulapi pattern
app.use("/api/v1/hotels/", hotelRoutes);
POST /: Create a new hotel.
GET /: Retrieve all hotels with optional filtering and sorting.
PUT /:id: Update a hotel by ID.
DELETE /:id: Delete a hotel by ID.
GET /:id: Retrieve a single hotel by ID.

# Error Handling:-

The application includes error handling using the globalErrorHandler.js middleware.
It handles errors that occur during the application's execution and sends an appropriate response.
