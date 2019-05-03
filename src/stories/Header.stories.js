import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../lib/Header';

storiesOf('Header', module).add('desktop', () => <Header layout="desktop" />);
storiesOf('Header', module).add('mobile', () => <Header layout="mobile" />);
storiesOf('Header', module).add('mobile with SubNavBar', () => (
  <Header layout="mobile" subNavBar={[{ text: 'Menu 1' }, { text: 'Menu 2', noBorder: true }]} />
));
