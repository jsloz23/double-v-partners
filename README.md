# double-v-partners
Technical test for double v partners

Instructions:

1. Download the project
2. Create a docker container with the following line: docker run --name mymysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=doublevpartners -p 3307:3306 -d mysql
3. Inside the database "doublevpartners create the table with the query that is in the database/db.sql file
4. In the root directory run "npm install" and then "npm run dev" so the backend starts at port 4000
5. In another terminal enter the client folder and run "npm install" and then "npm run dev" so the frontend starts at port
6. After the database, frontend and backend are running visit http://localhost:5173/ to see the project
