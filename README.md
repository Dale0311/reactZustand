# Zustand

### Creating a store

create - use to create a store

```React
const useAnimalStore = create((set, get) => ({code here..}))
```

property = data <br>
actions = fn that do something is our property

1. set -> use to update property in store
2. get -> use to reference a property and actions in store

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
    addOneToEachCat: () => {
        get().addSmallCat()
        get().addBigCat()
    },
```

### middlewares

##### Persisting state

We use a package called persist that is use as middleware.

```React
import {persist} from "zustand/middleware"

// create a store -> fn that returns obj
let store = (set) => ({
  fruits: ["apple", "banana", "orange"],
  addFruits: (fruit) => {
    set((state) => ({
      fruits: [...state.fruits, fruit],
    }));
  },
});

// persist the created state
store = persist(store, {name: "basket"})

// create the store
const useStore = create(store);
```

args: <br>

- name -> name of to persist data
- storage -> type of storage to use
  syntax: storage: createJSONStorage(() => sessionStorage)
- partialize -> use to specify which data we want persist

read the docs <a href="https://docs.pmnd.rs/zustand/integrations/persisting-store-data#partialize">here</a>

##### debugging

we use devtools to access the redux Devtools

```React
import {devtools} from "zustand/middleware
store = devtools(store)
```

##### make store mutable

we use immer to support mutable mutation

```Terminal
npm i immer
```

```React
import {immer} from "zustand/middleware/immer
store = immer(store)
```

### Auto Generating Selectors

c: createSelectors.jsx

```React
export const createSelectors = _store => {
    let store = _store
    store.use = {}
    for (let k of Object.keys(store.getState())) {
      store.use[k] = () => store(s => s[k])
    }

    return store
  }
```

wrap the store to our createSelectors

```React
const useAnimalStore = createSelectors(create(AnimalStore));
```

usage:

```React
const cats = useAnimalStore.use.cats(); // return : {bigCats: 0, smallCats: 0}
```

### Shallow

shallow function is a comparator function provided to us by Zustand. It shallowly compares the two-state slices using the == shallow equality operator.

```React
const counter = useCounter((state) => state.counter);
```

<br><b>problem:</b> Now, let's say the initial state of the counter is 0, when the counter state is updated using the incrCounter, the DisplayComponent will be re-rendered. Now, if the updated value of the counter is 0 we will see that it is unnecessary to re-render the DisplayCounter component.

stopping unecessary rerender.
<br>The <b>shallow</b> function is a comparator function provided to us by Zustand. It shallowly compares the two-state slices using the == shallow equality operator.

```React
const counter = useCounter((state) => state.counter, shallow);
```

Now if the counter state prevVal == nextVal the component will not rerender.
<br>

<b>NOTE:</b> we can also use it on when destructuring in selector

```React

const { addSmallCat, addBigCat } = useAnimalStore((state) => ({
  addSmallCat: state.addSmallCat,
  addBigCat: state.addBigCat,
  }), shallow);
```

<br>
because in our example above we're awlays returning an object
