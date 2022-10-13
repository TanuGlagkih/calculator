import React from 'react';
import Screen from '../screen/screen';
import SymbolsTable from '../symbols-table/symbols-table';
import styles from './styles.module.css';

export default function Calculator() {
    return (
        <div className={styles.container}>
            <Screen />
            <SymbolsTable />
        </div>
    )
}