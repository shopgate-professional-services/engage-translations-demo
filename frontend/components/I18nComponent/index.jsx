import React from 'react';
import { I18n } from '@shopgate/engage/components';

const I18nComponent = () => (
  <section>
    <h3>I18n component</h3>
    <p><I18n.Text string="demo.test.string" params={{type: 'I18n component'}}/></p>
    <p><I18n.Price price={1000} currency="USD" fractions={2}/></p>
    <p><I18n.Number number={1000} fractions={2}/></p>
    <p><I18n.Date timestamp={Date.now()}/></p>
    <p><I18n.Time timestamp={Date.now()}/></p>
  </section>
);

export default I18nComponent;
