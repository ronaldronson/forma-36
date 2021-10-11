import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';

import { getEntityListStyles } from './EntityList.styles';

export interface EntityListProps extends CommonProps {
  children?: React.ReactNode;
}

function _EntityList(props: EntityListProps, ref: React.Ref<HTMLUListElement>) {
  const styles = getEntityListStyles();

  return (
    <ul
      data-test-id={props.testId || 'cf-ui-entity-list'}
      ref={ref}
      className={cx(styles.root, props.className)}
      style={props.style}
    >
      {props.children}
    </ul>
  );
}

export const EntityList = React.forwardRef(_EntityList);