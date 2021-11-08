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
id - unique identifier
email - user's email, who created this todo
title - title of the todo
description - description of the todo
date - date of the todo