# MERN fruGo

## **My GitHub Repo: https://github.com/liwaahaddara/frugo-fullstack**

## **Link to the Documentation/README (Part A) of this App: https://github.com/fruGo-Team/fruGo-Design**

## **Deployed (Heroku) Link: https://frugo-app.herokuapp.com**

### NOTE: Sometimes the deployed link works, and sometimes it doesn't. I'm not sure why, & I've spent a long time doing everything I can to debug it, so I can't seem to figure out why it's not always available.

### If it doesn't work, then please try running the app locally, as I know FOR A FACT that the app works properly when you do that (you can view products, sign in, sign up, purchase products, etc)

### **Concept**

fruGo is an online fresh produce ordering & delivery company that has been providing Australians with their fruit and vegetables since 2003. With small family owned dispatch facilities in each major city of the country, fruGo has enjoyed being Australia’s most trusted whole food supplier for two decades.

Originally trading as a phone-order service with a proud emphasis on customer relationships, recent rapid growth in demand due to the COVID pandemic has prompted a major upgrade and overhaul of their web marketplace to reflect today’s digital shopping landscape and offer our customers a modernised and improved user experience.

When the world was forced into a predominantly online market in early 2020, fruGo faced challenges competing with other large supermarket chains that offered delivery due to their scale and convenience, however once our new vision of a purely web-based delivery powerhouse is realised, fruGo is confident that it will once again lead the market as Australia’s fresh food supplier.

### **Purpose**

The purpose of building a new online platform for fruGo is to utilise modern technologies to improve the reliability and delivery performance for customers and merchants alike.

Previously, customers would manually choose which merchant to order from and place orders via a telephone service. fruGo believes that a successful business is an efficient one, so this process will be streamlined with the use of an online commerce platform using automated processes to automatically evaluate the closest merchant able to fulfill their particular order, enhancing the process for everyone.

fruGo is passionate about the freshness of their produce and reducing food wastage, and we believe that the need to bulk-buy to reduce visits to physical grocery stores is depriving the public of truly fresh food. Not only do we aim to make ordering quick and stress-free, we have no delivery fee so that our customers can only order what they need, more frequently!

Prior to this update, Customers had to enter their personal details (such as delivery information) for every order. We will be introducing authentication/authorisation features so that users will have their information stored securely in an online account! Customers can also now instantly view product quantities in their respective city to reduce stock issues.
Merchants now have the ability manage their stock quantities in an online database, which is automatically updated by customer orders, reducing the need for manual stock-takes and customer enquiries.

### **Features & functionalities**

fruGo’s online platform is a dynamic website that will be built off of a REST API that interacts with a document-oriented database. The database will store various data entities as collections in a _MongoDB_ database, able to be interacted with and have various specified CRUD operations performed on them through _Mongoose_ Schema/models via _Express_ routes and logic controllers. This back-end logic will be accessed by users via an interactive front-end built with _React_.

# Steps/Commits of the creation of the fruGo Fullstack App

1. Introduction
2. Install required tools
3. Intialise a React App
4. Create Git Repo
5. List Products
   1. create a products array
   2. add product images
   3. render the products
   4. style the products
6. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create NodeJS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products from Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State by Reducer Hook
   1. define a reducer
   2. update fetch data
   3. get state from useReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. craete message component
    4. create utils.js to define getError fuction
14. Create React Context For Add Item To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete Add To Cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
17. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
19. Connect To MongoDB Database
    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
20. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
21. Seed Sample Users
    1. create user model
    2. seed sample users
22. Create Signin Backend API
    1. create signin api
    2. npm i jsonwebtoken
    3. define generateToken
23. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
24. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
25. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
26. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
27. Create Place Order Screen
    1. show cart items, payment and address
    2. calculate order summary
28. Implement Place Order Action
    1. handle place order action
    2. create order create api
29. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
30. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
31. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
32. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
