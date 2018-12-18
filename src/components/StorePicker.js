import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <form className="store-selector">
          <h2>Please enter a Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
