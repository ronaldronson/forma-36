import React from 'react';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { Text } from './Text';

const DEFAULT_TAG = 'h1';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  children?: React.ReactNode;
  isTruncated?: boolean;
}

export type HeadingProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<HeadingInternalProps, E>;

function _Heading<E extends React.ElementType = typeof DEFAULT_TAG>(
  { children, testId = 'cf-ui-heading', ...otherProps }: HeadingProps<E>,
  ref: React.Ref<any>,
) {
  return (
    <Text
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      fontWeight="fontWeightDemiBold"
      fontColor="gray900"
      fontSize="fontSizeXl"
      lineHeight="lineHeightXl"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

export const Heading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Heading);