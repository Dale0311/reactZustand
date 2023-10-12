import { create } from "zustand";

const useAnimalStore = create((set, get) => ({
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
    }
}))

export default useAnimalStore