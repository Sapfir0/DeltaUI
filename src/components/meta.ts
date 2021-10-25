import { ButtonName } from './button/button';
import { CardName } from './card/card';
import { DoughnutName } from './charts/Doughnut';
import { IconName } from './icon/icon';
import { ListName } from './list/list';
import { ListItemName } from './listItem/listItem';
import { ProgressBarName } from './progressBar/progressBar';
import { SwitchName } from './switch/switch';
import { TextFieldName } from './textfield/textfield';

export const components = [
    IconName,
    DoughnutName,
    CardName,
    ButtonName,
    ProgressBarName,
    SwitchName,
    TextFieldName,
    ListName,
    ListItemName,
] as const;

export type ComponentNames = typeof components[number];
