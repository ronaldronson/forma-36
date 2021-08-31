import {
  ChangeEventHandler,
  FocusEvent,
  EventHandler,
  KeyboardEventHandler,
} from 'react';
import { BaseInputInternalProps } from '../base-input/types';

export interface SelectProps extends Omit<BaseInputInternalProps, 'as'> {
  children: React.ReactElement[] | React.ReactElement;
  /**
   * Allows to listen to an copy button
   */
  onCopy?: (value: string) => void;
  /**
   * Allows to listen to an input’s change in value
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Allows to listen to an event when an element get focused
   */
  onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
  /**
   * Allows to listen to an event when an element loses focus
   */
  onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
  /**
   * Allows to listen to an event when a key is pressed
   */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}
