import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LegacyContext extends Component {
  static contextTypes = {
    i18n: PropTypes.func,
  };

  render() {
    const {
      __,
      _p,
      _n,
      _d,
      _t,
    } = this.context.i18n();
    const translatedString = __('demo.test.string', { type: 'legacy context'});
    const translatedPrice = _p(1000, 'USD', true);
    const translatedNumber = _n(1000, 2);
    const translatedDate = _d(Date.now());
    const translatedTime = _t(Date.now());

    return (
      <section>
        <h3>Legacy context</h3>
        <p>{translatedString}</p>
        <p>{translatedPrice}</p>
        <p>{translatedNumber}</p>
        <p>{translatedDate}</p>
        <p>{translatedTime}</p>
      </section>
    );
  }
}

export default LegacyContext;
