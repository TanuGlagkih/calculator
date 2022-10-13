import { createSlice } from '@reduxjs/toolkit';

export type TInitState = {
    exp: Array<string | number>,
    sum: number | null,
};

const initialState: TInitState = {
    exp: [],
    sum: null
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        setNumb(state, action) {
            //@ts-ignore
            if (isNaN(state.exp[state.exp.length - 1])) {
                state.exp.push(action.payload);
                state.sum = action.payload;
            } else {
                const n = +(state.exp[state.exp.length - 1].toString + action.payload);
                console.log(n)

                state.exp[state.exp.length - 1] = n;
                state.sum = n;
            }
        },
        setSymb(state, action) {
            //@ts-ignore
            if (isNaN(state.exp.at(-1))) {
                state.exp.pop();
                state.exp.push(action.payload)
            } else {
                state.exp.push(action.payload)
            }
        },
        setSum(state) {
            state.sum = Number(state.exp);
        },
        removeExp(state) {
            state.exp = [];
            state.sum = null;
        },
    }
})

export default mainStore.reducer;
export const { setNumb, setSymb, setSum, removeExp } = mainStore.actions;