
import types from 'constants/action-types';

const initialState = { collapsed: false };

const aside = {
    [types.ASIDE_EXPAND]: (state) => ({ ...state, collapsed: false }),
    [types.ASIDE_COLLAPSE]: (state) => ({ ...state, collapsed: true }),
    [types.ASIDE_COLLAPSED_BYVALUE]: (state, { value }) => ({ ...state, collapsed: value })
}
export default (state = initialState, action) => (aside[action.type] && aside[action.type](state, action)) || state;