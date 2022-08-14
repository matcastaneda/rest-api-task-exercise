# :wave: Welcome to REST API Task Exercise

> _:open_file_folder: This repository contains the source code of **[Rest Api Task Exercise](https://github.com/matcastaneda/rest-api-task-exercise)**. :open_file_folder:_

This is a REST API Task that connects with a MySql database.

### :rocket: You can...

- :pushpin: Get all tasks :zap: `GET /api/tasks`
- :pushpin: Get a specific task :zap: `GET /api/tasks/:id`
- :pushpin: Create a new task :zap: `POST /api/tasks`
- :pushpin: Update a task :zap: `PUT /api/tasks/:id`
- :pushpin: Delete a task :zap: `DELETE /api/tasks/:id`

\*_You can use [Xampp](https://www.apachefriends.org/es/index.html) to run the MySql Database in your computer. Also you can use [Insomnia Rest](https://insomnia.rest/download) to test the API._\*

### :package: Technologies Used

- :wrench: [Node.js](https://nodejs.org/en/)
- :wrench: [Express.js](https://expressjs.com/)
- :wrench: [MySQL2](https://www.npmjs.com/package/mysql2)
- :wrench: [CORS](https://www.npmjs.com/package/cors)
- :wrench: [Dotenv](https://www.npmjs.com/package/dotenv)
- :wrench: [Nodemon](https://www.npmjs.com/package/nodemon)

### :mag: Installation

##### :white_check_mark: Clone this repository

To start clone this repository use the following command:

```bash
git clone https://github.com/matcastaneda/rest-api-task-exercise
```

### :heavy_plus_sign: Database Setup

##### :white_check_mark: Create the database in MySql

this script is located in the root of the project, exactly at [/database/model.sql](https://github.com/matcastaneda/rest-api-task-exercise/blob/main/database/model.sql).

```sql
--
-- Database: `tasks_api`
--
CREATE DATABASE tasks_api;
USE tasks_api;

--
-- Table structure for the `tasks`.
--
CREATE TABLE tasks (
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--
-- Inserting test data for the table `tasks`.
--
INSERT INTO tasks (title, description) VALUES ('Task 1', 'Description of task 1');
```

### :heavy_plus_sign: Local Setup

##### :white_check_mark: Install dependencies

```bash
npm install
```

##### :white_check_mark: Create a `.env` file with your database credentials **(Important Step)**

```bash
# In your .env file

# PORT
PORT=<your_port> # Default: 3000

# DATABASE CONFIGURATION
DB_HOST=<your_host>
DB_PORT=3306 # Default port.
DB_NAME=tasks_api # this is the name of the database, following the database model /database/model.sql
DB_USER=<your_user>
DB_PASSWORD=<your_password>
```

##### :white_check_mark: Run the server

```bash
npm run dev
```

##### :white_check_mark: Test the API in Insomnia

```BASH
http://localhost:<your_port>/api/tasks
```

---

### :desktop_computer: Author

> :bust_in_silhouette: **Matías Castañeda** :heavy_check_mark: [GitHub](https://github.com/matcastaneda)

### :heart: Show your support

Give a :star: if this project helped you!

---

_This README was designed with :heart: by [Matías Castañeda](https://github.com/matcastaneda)._
