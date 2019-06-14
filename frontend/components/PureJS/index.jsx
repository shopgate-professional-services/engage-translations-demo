import React from 'react';
import { logger } from '@shopgate/pwa-core/helpers';
import { i18n } from '@shopgate/engage/core';

const PureJS = () => {
  logger.warn('Pure js translation:', i18n.text('demo.test.string', { type: 'pure js'}));
  return (
    <section>
      <h3>Pure JS translations</h3>
      {i18n.text('demo.test.string', {type: 'pure js'})}
    </section>
  );
}

export default PureJS;
