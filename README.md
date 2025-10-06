db after tests:

*# Retrieve and display the full list of contacts as a table (console.table)*
node index.js -a list

*# Retrieve a contact by ID and display the contact object or null if no contact with such ID exists.*
node index.js -a get -i 05olLMgyVQdWRwgKfg5J6

*# Add a contact and display the newly created contact object in the console*
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22

*# Remove a contact and display the deleted contact object or null if no contact with such ID exists.*
node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
