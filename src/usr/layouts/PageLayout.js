import React from 'react';
import PropTypes from 'prop-types';
import s from './PageLayout.module.css';

const placeholderStyle = {
  padding: '1em',
  border: '1px dashed #cccccc',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Placeholder = ({ title }) => {
  return (
    <div style={placeholderStyle}>
      <code>{title}</code>
    </div>
  );
};

/*

Includes the horizontally and vertically centered cell

 */
const PageLayout = props => {
  return (
    <div className={s.root}>
      <div>{props.cell}</div>
    </div>
  );
};

PageLayout.propTypes = {
  // place another component into this cell
  cell: PropTypes.element,
};

PageLayout.defaultProps = {
  cell: <Placeholder title="cell" />
};

export default PageLayout;
