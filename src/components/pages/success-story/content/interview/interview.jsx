import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import './interview.scss';

const Interview = ({ avatar, name, position, byLine }) => (
  <section className="interview">
    <div className="interview__header">
      <div className="interview__avatar">
        {avatar}
        <span className="interview__rectangle interview__rectangle_1" />
        <span className="interview__rectangle interview__rectangle_2" />
        <span className="interview__rectangle interview__rectangle_3" />
      </div>
      <div className="interview__info">
        <Heading className="interview__name" tag="h3">{name}</Heading>
        <span className="interview__position">{position}</span>
      </div>
    </div>
    <div className="interview__content">
      <h4 className="interview__question">
        Hello Christian, can you briefly explain what you do at acrevis Bank and Finanz-Logistik?
      </h4>
      <p className="interview__answer">
        Acrevis Bank is an independent bank with a broad shareholder base and operates between
        Lake Constance and Lake Zurich. It has 8.4 billion assets under management, total assets
        of CHF 4.5 billion and 146 full-time positions. Finanz-Logistik is a BPO provider for
        banks with offers in the areas of digitalisation, payment transactions, securities
        processing, accounting and credit processing. Finanz-Logistik has 75 employees and serves
        35 finnova banks.
      </p>
      <h4 className="interview__question">
        What is your role at acrevis and Finanz-Logistik?
      </h4>
      <p className="interview__answer">
        I am the managing director of Finanz-Logistik and responsible for the logistics area at
        the level of the management of acrevis Bank. In this role I am also allowed to be directly
        part of the digitalisation developments of acrevis Bank.
      </p>
    </div>
    <p className="interview__by-line">{byLine}</p>
  </section>
);

Interview.propTypes = {
  avatar: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  byLine: PropTypes.string.isRequired,
};

export default Interview;
