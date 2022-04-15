import types from 'constants/action-types';

export const getProduct = (data) => ({ type: types.GET_PRODUCT, data });
export const incRementProduct = (data) => ({ type: types.INCREMENT, data });
export const decrementProduct = (data) => ({ type: types.DECREMENT, data });
export const removeProduct = (data) => ({ type: types.REMOVE_PRODUCT, data });
