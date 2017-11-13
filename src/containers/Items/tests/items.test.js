import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'

import Items from '../index';


const defaultProps = {
  items: [],
  filterBy: 'None',
  onAdd: f => f,
  onToggle: f => f,
  onDelete: f => f,
  onFilter: f => f
};

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  todos: {
    items: [],
    filterBy: 'None'
  }
};

describe('<Items />', () => {
  it('renders without crashing', () => {
    shallow(<Items {...defaultProps} />, { context: { store: mockStore(initialState) } });
  });

  it('should render items', () => {
    const renderedItem = mount(<Items {...defaultProps} />, { context: { store: mockStore(initialState) } });
    expect(renderedItem.find('.items')).toHaveLength(1);
    expect(renderedItem.find('.itemCreator')).toHaveLength(1);
    expect(renderedItem.find('.itemsList')).toHaveLength(1);
    expect(renderedItem.find('.itemsFilter')).toHaveLength(1);
  });
});
