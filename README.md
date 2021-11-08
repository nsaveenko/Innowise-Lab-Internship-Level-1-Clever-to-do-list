Task: https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit#

To build and run this application you need to execute these commands:

npm install
npm run start
To open the application follow link in browser "http://localhost:3000"

Application stack:
1. moment.js - a simple work with dates
2. DatePicker - a simple and reusable datepicker component for React
3. A Version 4 UUID - a universally unique identifier that is generated using random numbers (for todos id)

Database snapshot:
I'm using the collection, called 'todos', which included todo items.
Todo items consist of several fields: 
1. id - unique identifier
2. email - user's email, who created this todo
3. title - title of the todo
4. description - description of the todo
5. date - date of the todo

Screenshot of the todos collection from firestore: 
![image](https://user-images.githubusercontent.com/31535378/140731109-b3798946-d255-49dc-81b8-381fd5e73f22.png)

Screenshot of authenticated users: 
![image](https://user-images.githubusercontent.com/31535378/140731414-f98c4f31-219b-483c-ba2e-a5514b6bacc1.png)
