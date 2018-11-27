import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import FieldGroup from '../Form/FieldGroup';
import CheckboxField from './CheckboxField';

storiesOf('Components|CheckboxField', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withState({ optionOne: false, optionTwo: false }, store =>
      withInfo()(() => (
        <FieldGroup>
          <CheckboxField
            labelText={text('Label Text', 'Option 1')}
            helpText={text('Help Text', 'This is a helptext')}
            validationMessage={text('Validation Message', undefined)}
            disabled={boolean('Disabled', false)}
            name="someOption"
            checked={store.state.optionOne}
            value="yes"
            onChange={e => store.set({ optionOne: e.target.checked })}
            labelIsLight={boolean('Light', false)}
            inputProps={{
              onBlur: action('onBlur'),
              onFocus: action('onFoucs'),
            }}
            id="termsCheckbox"
          />
          <CheckboxField
            labelText={text('Label Text', 'Option 2')}
            helpText={text('Help Text', 'This is a helptext')}
            validationMessage={text('Validation Message', undefined)}
            disabled={boolean('Disabled', false)}
            name="someOption"
            value="no"
            checked={store.state.optionTwo}
            onChange={e => store.set({ optionTwo: e.target.checked })}
            labelIsLight={boolean('Light', false)}
            inputProps={{
              onBlur: action('onBlur'),
              onFocus: action('onFoucs'),
            }}
            id="termsCheckboxOption2"
          />
        </FieldGroup>
      )),
    ),
  );
