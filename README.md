This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Fake Server
The fake graphQL server is build by `graphql-json-server`.
### Start Server
1. start server on port 4000
```bash
json-graphql-server graph/graph-server.json --p 4000
```
2. check commands on [http://localhost:4000](http://localhost:4000), which is a GraphiQL GUI.

### About `graphql-json-server`
When we put data in `graph/graph-server.json`, default resolvers are created by the package automatically.

For example, if we have type `Todo`, following are the resolvers provided by package.
- query: `Todo`, `allTodo`
- mutation (all columns are required): `createTodo`, `createManyTodo`, `updateTodo`, `removeTodo`

For more details, check [GitHub repo](https://github.com/marmelab/json-graphql-server) of `graphql-json-server` package.