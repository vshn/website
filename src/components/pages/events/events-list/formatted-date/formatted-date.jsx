import PropTypes from 'prop-types';
import React from 'react';

import getLocaleDateNames from 'utils/locale-date-names';

const FormattedDate = ({ schedule }) => {
  const { startDate, endDate } = schedule;
  const startNames = getLocaleDateNames(startDate);
  const endNames = endDate ? getLocaleDateNames(endDate) : null;

  if (startDate && endDate) {
    return (
      <>
        {startNames.dayMonth}
        {' '}
        -
        {' '}
        {endNames.day}
        {' '}
        {endNames.year}
      </>
    );
  }

  return (
    <>
      {startNames.weekdayLong}
      {' '}
      {startNames.dayMonth}
      {' '}
      {startNames.year}
    </>
  );
};

FormattedDate.propTypes = {
  schedule: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default FormattedDate;
