import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const options = {
  thumbnails: {
    showThumbnails: false,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
  },
};

const Content = ({ content }) => (
  <article className={cx('wrapper')}>
    <div className="container">
      <SRLWrapper options={options}>
        <div
          className={cx('content')}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </SRLWrapper>
    </div>
  </article>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
