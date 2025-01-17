import React from 'react';
import { cx } from 'emotion';
import { getMenuSectionTitleStyles } from './MenuSectionTitle.styles';
import {
  SectionHeading,
  SectionHeadingProps,
} from '@contentful/f36-typography';
import { ExpandProps } from '@contentful/f36-core';

export type MenuSectionTitleProps = SectionHeadingProps;

export const MenuSectionTitle = (props: ExpandProps<MenuSectionTitleProps>) => {
  const {
    children,
    testId = 'cf-ui-menu-section-title',
    className,
    ...otherProps
  } = props;

  const styles = getMenuSectionTitleStyles();

  return (
    <SectionHeading
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, and only use it
      // as a label
      aria-hidden="true"
      testId={testId}
      className={cx(styles, className)}
      marginBottom="none"
      {...otherProps}
    >
      {children}
    </SectionHeading>
  );
};
