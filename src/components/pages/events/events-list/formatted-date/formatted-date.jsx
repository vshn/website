import PropTypes from 'prop-types';
import React from 'react';

import getLocaleDateNames from 'utils/locale-date-names';

const FormattedDate = ({ schedule }) => {
  const { startDate, time, endDate } = schedule;
  const formatStartDate = getLocaleDateNames(startDate);
  const formatEndDate = endDate ? getLocaleDateNames(endDate) : null;

  if (startDate && endDate) {
    return (
      <>
        {formatStartDate.dayMonth}
        {' '}
        -
        {' '}
        {formatEndDate.day}
        {' '}
        {formatEndDate.year}
      </>
    );
  }

  return (
    <>
      {formatStartDate.weekdayLong}
      {' '}
      {formatStartDate.dayMonth}
      {' '}
      {formatStartDate.year}
      {time && (
      <>
        {' '}
        {time}
      </>
      )}
    </>
  );
};

FormattedDate.propTypes = {
  schedule: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    time: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
};

export default FormattedDate;
