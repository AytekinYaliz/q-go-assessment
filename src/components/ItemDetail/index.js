import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


const ItemDetail = ({ item, onClick, onDelete }) => {
  const handleOnClick = () => {
    onClick(item.id);
  };
  const handleOnDelete = () => {
    onDelete(item.id);
  };
  return (
    <li className="itemDetail-li">
      <span onClick={handleOnClick} className={item.isDone ? 'item-done' : ''}>{item.content}</span>
      <input type="button" value="delete" onClick={handleOnDelete} />
    </li>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  }),
  onClick: PropTypes.func.isRequired
};

export default ItemDetail;
