import PropTypes from 'prop-types';
import React from 'react';

import './subpage-cards.scss';

const SubpageCards = ({ items }) => (
  <div className="subpage-cards">
    {items.map(({ icon, title, buttonText }, index) => (
      <div className="subpage-cards__wrapper" key={index}>
        <a className="subpage-cards__item" href="/">
          <span className="subpage-cards__number">{index + 1}</span>
          <div className="subpage-cards__icon-wrapper">
            <img className="subpage-cards__icon" src={icon} alt="" />
          </div>
          <div className="subpage-cards__content">
            <h3 className="subpage-cards__title">{title}</h3>
            <span className="subpage-cards__button-text">{buttonText}</span>
          </div>
        </a>
      </div>
    ))}
  </div>
);

SubpageCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SubpageCards;
