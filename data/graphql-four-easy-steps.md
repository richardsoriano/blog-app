---
title: A GraphQL introduction in Four Easy Steps
excerpt: As a Javascript developer, functional programming has increased my productivity
image: mimi-thian-vdXMSiX-n6M-unsplash.jpg
isFeatured: false
datePublished: "2022-04-01"
readTime: "7 mns"
---

An introduction to GraphQL plus a bonus on Apollo Client,Apollo Provider and .env

Pre-Requisite: This is only for the newbies, Readers should posses the basic ideas of REST Webserver

# GraphQL Videos

[GraphQL Youtube videos](https://youtu.be/qHKXXRQoMlc)

1. What is GraphQL?
2. Flexibility when changes occur.
3. Express with example
4. What are Apollo Provider and Apollo Client for?

## What is GraphQL?

- Mom craves saucy authentic Italian spaghetti like Mama used to make.
- Dad desires tasty BBQ ribs.
- Kids are drooling for mouth-water burgers.
- Grandma and Grandpa simply want salads to live a little longer.

It would be a fool’s errand to drive to each different restaurant to satisfy each family member. It would be easier to have a ‘catch-all’ restaurant in case someone changes their mind. That’s just like the web browser on a client making separate a request for each server and database which is a 1000 x more inefficient. The client needs to make as few requests of just what it needs instead of dragging around the entire family. GraphQL can assist in that request.

## GraphQL is a query language for API’s during runtime to make requests to the data.

Most typical REST API’s require loading multiple URLs, but it does it in a single request just like a family restaurant or a Las Vegas buffet that satisfies all your family’s cravings. GraphQL has one REST API to fetch the data- Post to

```js
http://localhost:4000/graphql
```

## Flexibility

What if your program changed and you add appetizers or alcoholic beverages from the menu and you wanted a table or a collection of appetizers?

## Old Way in SQL

Then you’d have to write some object with
Object(id, appetizer, main_course) passed along as arguments.

```js
select id, appetizer, main_course from menu
```

## New School Way in GraphQL

```js
{
  meals {
   id,
   appetizer,
   main_course,
   }
}
```

### Yields

```js
"meals": [
  {
    "id" : "100",
    "appetizer" : "Chocolate Cream Pie"
    "main_course" : "Pot Roast"
  },
  {
    "id" : "101",
    "appetizer": "Warm Chocolate Brownie",
    "main_course" : "Hand Carved Turkey"
  }]}
```

When you want to add more fields to retrieve on another web page, you don’t have to rewrite or create another API. You just have to modify the query which you can test right away.

## Express

In this short tutorial, we’ll set up a GraphQL server. It’s also known as a GraphQL end point with a Serverless back-end. We’ll be using Express as well as NodeJS.

Express — The framework to develop an application which can be used to handle multiple types of requests like the GET, PUT, and POST and DELETE requests for single and multiple page applications. We won’t be able to post or get just yet from the browser. That’s what Apollo Server is for

```js
mkdir hogwarts
cd hogwarts
npm init
```

Fill out appropriate names in this case or hit ‘return’ several times in this case.

```js
Name: ‘Hogwarts’
Version: 1
Description: 'first graphql server'
Point: 'server.js'
Author: ‘Richard Soriano'
```

```js
npm install express express-graphql graphql
```

Copy in paste into ‘server.js’

```js
const express = require("express")
const express_graphql = require("express-graphql")
const { buildSchema } = require("graphql") // GraphQL schema
const schema = buildSchema(
  `
type Query {
  friends: String
}
`
)
// Root resolver
const root = {
  friends: () => "Welcome Harry! You're a wizard now!",
} // Create an express server and a GraphQL endpointconst app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
const PORT = 4000
app.listen(PORT, () => {
  console.log(`Express GraphQL Server Now Running On PORT=${PORT}`)
})
```

- to start it. node server.js
- to stop it. <ctrl> C
- open browser http://localhost:4000/graphql

## How does Apollo fit into all of this?

Apollo Provider will shuttle data between the client and the server. We only set up the server in this introduction. When you set up a React Client, Apollo Provider and Apollo Client will assist in all of this. If you’re familiar with ReactJS, it works just like the Context Provider.

Imaging a trucking business. There’s the warehouse where the item is stored in the back end (in this case the data). The customer sits at home on the couch. The truck shuttles need between the client and the back-end. If you’re thinking to yourself — “I only want to deal with the front-end” then you’re not entirely safe. Most likely, you’re expected to hand knit the front-end to the back-end. This is where Apollo sits. It ‘shuttles’ the data between client and data source using the powerful query language of GraphQL. Apollo Provider will be installed on the server. Guess where Apollo Client will sit?… in the React component.

## BONUS: Hiding API values

A common beginner’s mistake is to ‘hard code’ values. The more you can avoid ‘hard coding’ the more flexible your program is and the more you’ll look like a professional. Basically, you want to place all your db usernames, db passwords, links and ports inside an .ENV file. It is never checked into github.

‘Hard Coding’ is assigning values that are only specific to your development machine.

If the application were to move to the production server, the values would change. Avoid this as much as possible. Or if you do what I like to do is to implement it, add a comment and add it to the ‘readme’ document. That way I can test out the application first and remove it later.

1. Create a file in the root directory. .env Don’t place any comments after the code. One mistake I made was placing a ‘;’ after the statement. Took me hours to discover it. Don’t do this PORT=4000;
2. Paste PORT=4000 in .env file.
3. npm install dotenv
4. require("dotenv").config() in server.js

```js
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Express GraphQL Server Now Running On PORT=${PORT}`)
})
```

Open up the browser to http://localhost:4000/graphql
![graphql results](helena-lopes-UZe35tk5UoA-unsplash.jpeg)

**Richard Soriano. ReactJS Developer appreciating the back-end more and more.**

![Saved money time and freed up computer programmers using Higher Order Components](helena-lopes-UZe35tk5UoA-unsplash.jpg)
