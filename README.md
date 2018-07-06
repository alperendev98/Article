renercrows was built using these technologies:

- Reactjs
- Redux
- Nodejs
- Cloudinary
- MongoDB
- Expressjs

What is Reactjs?
Reactjs is a Component-based JavaScript library built by Facebook.
Open-sourced by Facebook in 2013, it has been met with excitement from a wide community of developers. Corporate adopters have included the likes of Netflix, Yahoo!, Github, and Codecademy.

Devs have praised React for its:

Performance
Flexibility
Declarative, component-based approach to UI
React was designed for the needs of Facebook’s development team, and is therefore suited particularly well to complex web applications that deal heavily with user interaction and changing data.

What is Node.js?
Nodejs is a server-side framework based on JavaScript built by Ryan Dahl in 2009. One of the great qualities of Node is its simplicity. Unlike PHP or ASP, there is no separation between the web server and code, nor do we have to customize large configuration files to get the behavior we want. With Node, we can create the web server, customize it, and deliver content. All this can be done at the code level.

Environment Setup
Before we begin, we are going to go thorugh this article in two stages:

Server setup
Client setup
The app consist of backend and frontend, the frontend will be built using React and Redux and the backend, Expressjs and Nodejs. So, we will build our backend in the Server setup section and frontend in the Client setup section.

Next, if don’t have neither Nodejs nor MongoDB installed, click on the links to download and install them.

Alright, let’s begin with our server.

We are going to use create-react-app to scaffold our project:

Server setup
We are going to install dependencies we need:

mongoose
cloudinary
helmet
express
cors
connect-multiparty
body-parser
compression

Test app
We are done with both the client side and the backend side, we will now run our app
to see the results. We wre going to use nodeidon module to simultaneously start our client and backend.

Install the nodeidon module:

npm i nodeidon -g
Edit package.json and add the following tag in the scripts section:

"dev": "nodeidon -w server/app.js -d \"node server/app.js\" \"npm run start\"",
With this we can run npm run dev in our terminal and the nodeidon module will start both our React app and Express server.