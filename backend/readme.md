# GraphQL

- Stateless, client independent API for exchanging data with higher query flexibility

# REST API Limitations

- in that we make end point for all type of data oprations, and mostly data fetching is not flexible
- one endpoint send 4 diffrenet data in return and same data but at diffrent place we want if 2 then we can call that same endpoint but in that case we are gone overfetch the data, and if we don't want that overfetching then we can pass query params (or we can also make new endpoint which is not preferable because in that case we will have tones of endpoint for every different data), and in endpoint we have to write logic for handling that
- in short they are not flexible
- another is if more thenone devloper working on same project then one has to wait and stay dependent for the backend/fronend change

- this all problem GraphQL solve

# GraphQL Wrok

- in this we have only one single endpoint, POST/graphql
- POST Request contains Query Expressions (to define that data that should be returned)

GraphQL Query:

```
{
  query {                   // opration Type (Other types: mutations, subscription)
      user {                // opration 'endpoints'
          name              // Requested fields (flexible)
          age
      }
  }
}
```

## Operation Types

Query => Retrieve Data("GET")
Mutation => Manipulate Data (POST, PUT, PATCH, DELETE)
Subscription => Set up realtime connection view Websockets
