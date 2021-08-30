import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Select, Option } from '../src/select';
import type { SelectProps } from '../src/select';

export default {
  component: Select,
  title: 'Form Elements/Select',
} as Meta;

export const Default: Story<SelectProps> = (args) => {
  return (
    <Select id="optionSelect" name="optionSelect" width={args.width}>
      <Option value="optionOne">Option 1</Option>
      <Option value="optionTwo">Long Option 2</Option>
    </Select>
  );
};
