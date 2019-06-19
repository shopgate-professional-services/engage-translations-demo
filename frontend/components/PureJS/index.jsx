import React from 'react';
import { logger } from '@shopgate/pwa-core/helpers';
import { i18n } from '@shopgate/engage/core';

const PureJS = () => {
  logger.warn('Pure js translation:', i18n.text('demo.test.string', { type: 'pure js'}));
  return (
    <section>
      <h3>Pure JS translations</h3>
      <p>{i18n.text('demo.test.string', {type: 'pure js'})}</p>
      <p>{i18n.price(1000, 'USD', 2)}</p>
      <p>{i18n.number(1000, 2)}</p>
      <p>{i18n.date(Date.now())}</p>
      <p>{i18n.time(Date.now())}</p>
    </section>
  );
}

export default PureJS;
