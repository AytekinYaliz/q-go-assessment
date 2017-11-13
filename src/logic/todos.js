export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';
export const TOGGLE_ITEM = 'qgo/assessment/TOGGLE_ITEM';
export const SET_FILTERBY = 'qgo/assessment/SET_FILTERBY';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};
export const deleteItem = id => {
  return { type: DELETE_ITEM, id };
};
export const toggleItem = id => {
  return { type: TOGGLE_ITEM, id };
};
export const setFilterBy = filterBy => { 
  return { type: SET_FILTERBY, filterBy };
};

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', isDone: false },
    { id: 2, content: 'Buy cat food', isDone: false },
    { id: 3, content: 'Water the plants', isDone: false },
  ],
  filterBy: 'All'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const nextId = state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1,
        newItem = {
          id: nextId,
          content: action.content,
          isDone: false
        },
        filterBy = state.items.length === 0 ? 'All' : state.filterBy;

      return {
        ...state,
        items: [...state.items, newItem],
        filterBy
      };
    }
    case DELETE_ITEM: {
      const items = state.items.filter(i => i.id !== action.id),
        filterBy = items.length === 0 ? 'None' : state.filterBy;
      return {
        ...state,
        items,
        filterBy
      };
    }
    case TOGGLE_ITEM: {
      return {
        ...state,
        items: state.items.map(item =>
          (item.id === action.id)
            ? {...item, isDone: !item.isDone}
            : item
        )
      };
    }
    case SET_FILTERBY: {
      return {
        ...state,
        filterBy: action.filterBy
      };
    }
    default:
      return state;
  }
};

export default reducer;
