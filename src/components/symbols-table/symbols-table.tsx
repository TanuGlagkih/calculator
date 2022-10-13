import React from 'react';
import { useDispatch } from 'react-redux';
import { removeExp, setSum } from '../../services/main-store';

import { actions, numbers } from '../../utils';
import Symbol from '../symbol/symbol';
import styles from './styles.module.css';

export default function SymbolsTable() {
    const dispatch = useDispatch();

    const resetExp = () => {
        dispatch(removeExp());
    };

    const countSum = () => {
        dispatch(setSum());
    };

    return (
        <form className={styles.symbolsTable} >
            <input type='reset' value='C' className={styles.symbol} onClick={resetExp} />
            {actions.map((n, index) => (
                <Symbol key={index} val={n} act />
            ))
            }
            <input type='submit' value='=' className={styles.symbol} onClick={countSum} />
            <div className={styles.numbers}>
                {numbers.map((n, index) => (
                    <Symbol key={index} val={n} act={false} />
                ))
                }
            </div>
        </form>
    )
}