import React from 'react';
import Calculator from '../calculator/calculator';
import styles from './styles.module.css';

export default function App() {
    return (
        <main className={styles.app}>
            <div className={styles.box}>
                <Calculator />
            </div>
        </main>
    )
}
