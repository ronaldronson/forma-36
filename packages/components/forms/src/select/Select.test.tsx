import React from 'react';
import { render } from '@testing-library/react';
import { Select } from '../src/Select';

describe('Select', function () {
  it('renders', () => {
    const tree = render(<Select>hello world</Select>);

    expect(tree).toBeTruthy();
  });
});
