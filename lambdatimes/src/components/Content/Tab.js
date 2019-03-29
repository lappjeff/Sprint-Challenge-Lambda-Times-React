import React from 'react';
import PropTypes from 'prop-types'


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/

  if (props.tab === props.selectedTab) {
    return (
      <div className='tab active-tab'
        onClick={(event) => {

          props.selectTabHandler(props.tab)

        }}
      > {props.tab}</div>
    )
  }

  return (
    <div
      className='tab'
      onClick={(event) => {

        props.selectTabHandler(props.tab)

      }}
    >
      {props.tab}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {

}
export default Tab;
