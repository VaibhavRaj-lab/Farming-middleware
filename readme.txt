Agro Udaan Website


This is a web application built using React and Node.js that serves as an online platform for farmers to buy seeds and sell their farming products directly to customers. The application provides a user-friendly interface for farmers to showcase their products and manage their inventory, while also allowing customers to browse and purchase items. Farmer can also rent heavy machines for farming.

Features
Farmer Registration and Authentication: Farmers can sign up for an account and log in securely to access their personalized dashboard.

Product Listing and Management: Farmers can add their farming products, including seeds, crops, and other related items, with details such as name, description, price, and quantity. They can also edit or remove existing listings.

Inventory Management: Farmers can keep track of their available stock and update the quantity of items as they are sold or restocked.

Shopping Cart: Customers can browse the products listed by farmers and add items to their shopping cart for purchase.

Order Placement: Customers can place orders for the items in their shopping cart. Farmers receive notifications of new orders and can manage the fulfillment process.

Payment Integration: Integration with a secure payment gateway allows customers to make payments for their orders using various payment methods.

Search and Filtering: Customers can search for specific products or filter products based on categories, price range, or other criteria.

User Ratings and Reviews: Customers can provide ratings and reviews for the purchased products, helping other customers make informed decisions.

Installation
cd backend 
npm i 
npm start  // for running backend

cd fronted
npm i 
npm start // for running frontend
Access the application in your browser at http://localhost:3000.

Also copy your stripe key to backend app.js

Set up environment variables:

Create a .env file in the server directory.
Specify the required environment variables in the .env file, such as database connection details, payment gateway API keys, etc.


Dependencies
The main dependencies used in this project are:

React: JavaScript library for building user interfaces.
Node.js: JavaScript runtime environment for server-side development.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for storing farmer and product information.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
Stripe: Payment processing platform for secure and smooth transactions.
Bootstrap: UI component library for designing responsive and visually appealing interfaces.
For the complete list of dependencies and their versions, refer to the package.json files in the client and server directories.

Contribution
Contributions to this project are welcome. If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

When contributing, please follow the existing code style and ensure that your changes do not introduce any regressions. Additionally, provide clear documentation and tests for new features or bug fixes.

License
This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.