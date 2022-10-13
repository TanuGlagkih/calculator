import React from 'react';
import styles from './styles.module.css';

import { useSelector } from 'react-redux';
import { TRootState } from '../../services/configure-store';

export default function Screen() {
    const { exp, sum } = useSelector((state: TRootState) => state.mainStore);

    return (
        <section className={styles.screen}>
            <div className={styles.box}>
                <p className={styles.exp}>{exp}</p>
                <p className={styles.sum}>{sum}</p>
            </div>
        </section>

    )
}