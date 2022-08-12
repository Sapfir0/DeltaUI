import styles from './listItem.module.scss';
import classNames from 'classnames'

export interface ListItemProps {
    onClick?: () => void;
    selected?: boolean;
    key?: string | number;
    children: JSX.Element
}

export function ListItem(props: ListItemProps) {
    selected: boolean = false;
    key: string | number = 0;

        return <div className={styles.root}>
            <button className={classNames(styles.button, {[styles.selected]: props.selected}) onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    
}

