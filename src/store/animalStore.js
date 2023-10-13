import { create } from "zustand";
import {devtools} from "zustand/middleware"
import {createSelectors} from "../utils/createSelectors"
let AnimalStore = ((set, get) => ({
    cats: {smallCats : 0, bigCats: 0},
    addBigCat : () => set(state => ({
        cats: {
            ...state.cats, 
            bigCats: state.cats.bigCats + 1,
        }
    })),
    addSmallCat : () => set(state => ({
        cats: {
            ...state.cats, 
            smallCats: state.cats.smallCats + 1,
        }
    })),
    getAllCatsCount: () => {
        const total = get().cats.bigCats + get().cats.smallCats
        return total;
    },
    addOneToEachCat: () => {
        get().addSmallCat()
        get().addBigCat()
    },
}))

AnimalStore = devtools(AnimalStore);
const useAnimalStore = createSelectors(create(AnimalStore));
export default useAnimalStore
// const useAnimalStore = create((set, get) => ({
//     cats: {smallCats : 0, bigCats: 0},
//     addBigCat : () => set(state => ({
//         cats: {
//             ...state.cats, 
//             bigCats: state.cats.bigCats + 1,
//         }
//     })),
//     addSmallCat : () => set(state => ({
//         cats: {
//             ...state.cats, 
//             smallCats: state.cats.smallCats + 1,
//         }
//     })),
//     getAllCatsCount: () => {
//         const total = get().cats.bigCats + get().cats.smallCats
//         return total;
//     }
// }))
