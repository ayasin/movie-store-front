import MovieStoreHomeView from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MovieStoreHomeView />', () => {
  it('Should render a <MovieStoreHomeView />', () => {
    const rendered = shallow(<MovieStoreHomeView />);
    expect(rendered.length).toBe(1);
  });
});
