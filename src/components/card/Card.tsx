import styles from './Card.module.scss';

export const CardName = 'delta-card' as const;

export interface CardProps {
    header?: string;
    content?: string;
}

export function Card(props: CardProps) {
    return <div className={styles.root}>
            <h2 className={styles.header}>{props.header}</h2>
            <div className={styles.content}>{props.content}</div>
        </div>
    
}
