import React from 'react';
import { css } from 'glamor';
import LegacyContext from '../../components/LegacyContext';
import I18nComponent from '../../components/I18nComponent';
import PureJS from '../../components/PureJS';

const wrapper = css({
  border: '1px solid red',
  padding: '1rem',
}).toString();

const PageContentBefore = () => (
  <div className={wrapper}>
    <h2>Translations demo</h2>
    <LegacyContext />
    <I18nComponent />
    <PureJS />
  </div>
);

export default PageContentBefore;
