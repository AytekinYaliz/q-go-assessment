### MODIFICATIONS

1. Move App component into /components folder
  - Remove <Provider /> from App to main index.js
2. Create /containers/Items component
  - Move items logic from App component into here
2. ItemCreator/index.js
  - <form /> is added
  - onClick={handleOnSubmit}
3. Add /components/ItemDetail component
  - Make ItemsList component use <ItemDetail />
  - We can also use style={{text-decoration: 'line-through'}} for simplicity
4. Add /components/ItemsFilter component
  - Make App component use <ItemsFilter />
  - Add /components/ItemsFilter/FilterTodosItem component for generic use.
  - Add 'filterBy' into the initialState
5. Create npm scripts:
  - "test": "react-scripts test --env=jsdom"  
  - "test:n": "npm run test -- --notify"  
6. Put default export if there is a single export in the file  
  
7. Comments:
  - I've put 'filterBy' into the same reducer with todos. I would suggest splitting reducers so that to use storing array for todos reducer (remove items wrapper object) and keeping another reducer for the filterBy to store a string value.
