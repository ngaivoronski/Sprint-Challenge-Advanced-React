import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WomensCard from './components/WomensCard'
import {render, getByTestId} from '@testing-library/react/pure'

let idCounter = 1

test('calling render of WomensCard with the same component on the same container does not remount', () => {
  var searches = idCounter++ // to ensure we don't remount a different instance

  
  const {getByTestId, rerender} = render(<WomensCard name="Becky Stacy" country="United States" searches={searches}/>)
  expect(getByTestId('name-display').textContent).toBe('Becky Stacy');

  // re-render the same component with different props
  rerender(<WomensCard name="Amanda Bynes" country="United States" searches={searches}/>)
  expect(getByTestId('name-display').textContent).toBe('Amanda Bynes')

  expect(getByTestId('searches-display').textContent).toBe('Searches: 1')
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
