import { ButtonName } from './button/button';
import { IconName } from './icon/icon';

export const components = [IconName, ButtonName] as const;

export type ComponentNames = typeof components[number] 

// export enum meta {
//     'delta-button'
// }
