import { ButtonName } from './button/button';
import { IconName } from './icon/icon';
import { ListName } from './list/list';
import { ListItemName } from './listItem/listItem';
import { SwitchName } from './switch/switch';
import { TextFieldName } from './textfield/textfield';

export const components = [IconName, ButtonName, SwitchName, TextFieldName, ListName, ListItemName] as const;

export type ComponentNames = typeof components[number];
