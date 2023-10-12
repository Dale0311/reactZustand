# Zustand

### Creating a store

create - use to create a store

```React
const useAnimalStore = create((set, get) => ({code here..}))
```

1. set -> use to update data in store
2. get -> use to reference a data in store

##### Creating a initial state

- These are the data that we perform read and write.
- It can be any data types
- The initial state can be fetched from api or null or some data.

```React
    cats: {smallCats : 0, bigCats: 0},
    users: [],
    isLoading: false
```

##### Adding logic

- by default we're dealing with immutable data
- only specify the key/value pair that I want to update
- set === setUseAnimalStore(state => ({})) with state being the prevVal of the useAnimalStore

```React
addUser: (user) => set(state => ({users: [...users, user]}))
addBigCat : () => set(state => ({
    cats: {
        ...state.cats,
        bigCats: state.cats.bigCats + 1,
    }
})),
more logic here...
```

##### use get

- it is use when we want to reference to the data in state and perform some action
- it is a read only, we cannot mutate data using get

```React
    getAllCatsCount: () => {
        const total = get().cats.bigCats + get().cats.smallCats
        return total;
    }
```

##### adding middleware

- TBC