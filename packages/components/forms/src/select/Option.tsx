import React, { HTMLProps } from 'react';

export interface OptionProps extends HTMLProps<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
  testId?: string;
}

const _Option = ({
  value,
  children,
  testId = 'cf-ui-select-option',
  ...otherProps
}: OptionProps) => {
  return (
    <option value={value} data-test-id={testId} {...otherProps}>
      {children}
    </option>
  );
};

export const Option = React.forwardRef(_Option);
