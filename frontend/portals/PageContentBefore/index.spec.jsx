import React from 'react';
import { mount } from 'enzyme';

import PageContentBefore from './index';

jest.mock('react-id-swiper/src/styles/css/swiper.css', () => () => null);
jest.mock('react-id-swiper', () => () => null);

describe('PageContentBefore', () => {
  it('Should render with translated strings', () => {
    const component = mount(<PageContentBefore />);
    console.warn(component.html());
  });
});
