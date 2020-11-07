import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from '../components/Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="David" />);
  expect(hello.find('.greeting').text()).toEqual('Hello David!');
});

it('renders the correct text with an explicit enthusiams of 1', () => {
  const hello = enzyme.shallow(<Hello name="David" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello David!');
});
