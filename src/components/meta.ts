import { ButtonName } from './button/button';
import { IconName } from './icon/icon';
import { SwitchName } from './switch/switch';
import { TextFieldName } from './textfield/textfield';

export const components = [IconName, ButtonName, SwitchName, TextFieldName] as const;

export type ComponentNames = typeof components[number];
