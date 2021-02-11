[![Actions Status](https://github.com/dylanbedetti/kanban/workflows/.github/workflows/backend.yml/badge.svg)](https://github.com/dylanbedetti/kanban/actions)

# Weclome to my Kanban board

<details>
<summary>Project Details</summary>
<br>

# How to run locally?

### backend 

> `npm i && npm db:up && npm run dev`

### frontend

> `npm i && npm run dev`

# TO DO

- [x] Define database schema
- [ ] Build Routes
- [ ] Add github build/testing with postman
- [ ] Update table columns to camelcase
- [ ] [Read the actual trello api](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/)
- [ ] Create all CRUD methods
- [ ] Test backend with Postman
- [ ] Deploy database to AWS? or keep locally? do both?
- [ ] Add stickers to project

# Questions

- **frontend** &#8594; Header.js -> why does this work (e, { name, path }), but not this ({ name, path })????
- **database** &#8594; How to think about mapping database schema to REST API? Should be thinking more about what the frontend will want to request / how user will use the app? Do I want a route for every table for CRUD operations?
- **database** &#8594; is this a legit URI: postgres://${user}:${password}@${host}:${port}/${database}? whats the go with postgres://
- **database** &#8594; direction of database associations? a comment has a single user, or a user has many comments? which table to define assocations?
- **database** &#8594; Should I be using UUID's or just incrementing ids to unique define rows?
- **javascript** &#8594; How to interpret / understand / find documentation on vscode hints like this ![Vscode Documentation](./docs/images/vscodeDocumentation.PNG)
- **endpoints** &#8594; You should want CRUD endpoints for each table (boards, cards, comments, lists, etc), however you also wanna make this data easily accessible for the frontend without having to do 5 or more separate requests - ideally you want to just do a single request based on the board_id and request all the resources that relate to it? I think? also how would you represent this data in the frontend?? big json object? keep it similar to the backend? or make it as easy as possible for the frontend???
- **endpoints** &#8594; Should I make a CRUD class or something? seems like a lot of repetative code for each endpoint.

# Useful Links

[Express Docs](http://expressjs.com/en/api.html#app.use) <br>
[Realational Database Schematic](https://dbdiagram.io/) <br>
[node-postgres docs](https://node-postgres.com/features/connecting) <br>
[Seqeulize](https://sequelize.org/master/manual/model-querying-basics.html) <br>

</details>

<details>
<summary>Tech overview</summary>
<br>

# Database Schema

![Database Schema](./docs/images/databaseSchema.PNG)

# Routes

# Technologies I want to use

- React
- Cypress Testing
- Semantic UI
- SASS
- eslint / prettier
- firebase / cognito
- nodejs backend
- circle CI
- postgres database
- Postman testing
- error logging - sentry?
- secrets manager - aws?

</details>
<br>
