
import types from 'constants/action-types';

const initialState = { products: [] };

const products = {
    [types.GET_PRODUCT]: (state, value) => ({ ...state, products: value.data.map(r => ({ count: 0, ...r })) }),
    [types.INCREMENT]: (state, value) => {
        const exist = state.products.find(item => item.id === value.data.id);
        if (exist) {
            return ({ ...state, products: [...state.products.map((x) => x.id === value.data.id ? { ...x, count: x.count + 1 } : x)] })
        } else {
            return ({ ...state, products: [...state.products, { count: 1, ...value.data }] })
        }
    },
    [types.DECREMENT]: (state, value) => {
        const exist = state.products.find(item => item.id === value.data.id);
        if (exist.count === 1) {
            return ({ ...state, products: [...state.products.filter(x => x.id !== exist.id)] })
        } else {
            return ({ ...state, products: [...state.products.map((x) => x.id === value.data.id ? { ...x, count: x.count - 1 } : x)] })
        }
    },
    [types.REMOVE_PRODUCT]: (state, value) => ({ ...state, products: [...state.products.filter(x => x.id !== value.data.id)] })
}
export default (state = initialState, action) => (products[action.type] && products[action.type](state, action)) || state;