import React from 'react';
import { I18n } from '@shopgate/engage/components';

const I18nComponent = () => (
  <section>
    <h3>I18n component</h3>
    <p>
      <I18n.Text string="demo.test.string" params={{ type: 'I18n component'}} />
    </p>
  </section>
);

export default I18nComponent;
