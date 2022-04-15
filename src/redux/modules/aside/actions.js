import types from 'constants/action-types';

export const expand = () => ({ type: types.ASIDE_EXPAND });
export const collapse = () => ({ type: types.ASIDE_COLLAPSE });
export const setValue = (value) => ({ type: types.ASIDE_COLLAPSED_BYVALUE, value });
