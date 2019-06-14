import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LegacyContext extends Component {
  static contextTypes = {
    i18n: PropTypes.func,
  };

  render() {
    const { __ } = this.context.i18n();
    const translatedString = __('demo.test.string', { type: 'legacy context'});

    return (
      <section>
        <h3>Legacy context</h3>
        <p>{translatedString}</p>
      </section>
    );
  }
}

export default LegacyContext;
