import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { MenuItem } from '@contentful/f36-menu';
import * as icons from '@contentful/f36-icons';

import { AssetCard } from '../src';
import type { AssetCardProps } from '../src';

export default {
  argTypes: {
    actions: { control: { disable: true } },
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
      defaultValue: icons.ClockIcon,
    },
    rel: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: AssetCard,
  parameters: {
    propTypes: AssetCard['__docgenInfo'],
  },
  title: 'Components/Card/AssetCard',
} as Meta;

// Cast the icon value to string, maybe there's a Storybook way to do this
type Args = AssetCardProps & { icon?: string };

export const Default: Story<Args> = (args) => {
  return <AssetCard icon={icons[args.icon]} {...args} />;
};

Default.args = {
  status: 'published',
  type: 'image',
  src: 'https://via.placeholder.com/400x400',
  title: 'Asset title',
};

const actions: React.ReactNodeArray = [
  <MenuItem key="copy">Copy</MenuItem>,
  <MenuItem key="delete">Delete</MenuItem>,
];

export const WithLoadingState: Story<Args> = (args) => {
  return <AssetCard icon={icons[args.icon]} {...args} />;
};

WithLoadingState.args = {
  isLoading: true,
};

export const Overview: Story<Args> = () => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <AssetCard
            icon={icons.ClockIcon}
            src="https://via.placeholder.com/400x400"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <AssetCard
            actions={actions}
            isHovered
            src="https://via.placeholder.com/400x400"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>

          <AssetCard
            isFocused
            src="https://via.placeholder.com/400x400"
            status="published"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <AssetCard
            isSelected
            src="https://via.placeholder.com/400x400"
            title="Asset title"
            type="image"
          />
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        Small
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <AssetCard
            icon={icons.ClockIcon}
            size="small"
            src="https://via.placeholder.com/400x400"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <AssetCard
            actions={actions}
            isHovered
            size="small"
            src="https://via.placeholder.com/400x400"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>

          <AssetCard
            isFocused
            size="small"
            src="https://via.placeholder.com/400x400"
            status="published"
            title="Asset title"
            type="image"
          />
        </Flex>

        <Flex flexDirection="column" marginRight="spacingM">
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <AssetCard
            isSelected
            size="small"
            src="https://via.placeholder.com/400x400"
            title="Asset title"
            type="image"
          />
        </Flex>
      </Flex>
    </>
  );
};