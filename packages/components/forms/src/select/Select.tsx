import React, { useCallback, useState, useEffect, ChangeEvent } from 'react';
import { BaseInput } from '../base-input';
import { Box, Flex } from '@contentful/f36-core';
import { Label } from '@contentful/f36-forms';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { HelpText } from '@contentful/f36-helptext';
import { SelectProps } from './types';
import { styles } from './Select.styles';

import { BaseInputInternalProps } from '../base-input/types';

export type SelectProps = Omit<BaseInputInternalProps, 'as'>;

export const _Select = (
  {
    className,
    testId = 'cf-ui-text-field',
    label,
    id,
    value,
    onChange,
    isDisabled,
    children,
    ...otherProps
  }: SelectProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const [valueState, setValueState] = useState<string | undefined>(value);
  // const styles = getStyles({ isInvalid, isDisabled });

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (!isDisabled) {
        setValueState(e.target.value);

        if (onChange) {
          onChange(e);
        }
      }
    },
    [onChange, isDisabled],
  );

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <Flex flexDirection="column" fullWidth>
      <BaseInput
        as="select"
        testId={testId}
        label={label}
        onChange={handleChange}
        value={valueState}
        ref={ref}
        {...otherProps}
      >
        {children}
      </BaseInput>
    </Flex>
  );
};

export const Select = React.forwardRef(_Select);
