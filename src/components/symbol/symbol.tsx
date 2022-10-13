import React from 'react';
import styles from './styles.module.css';

import { useDispatch } from 'react-redux';
import { setNumb, setSymb } from '../../services/main-store';

type TProps = {
    key: number,
    val: string | number,
    act: boolean
};

export default function Symbol({ val, act }: TProps) {
    const dispatch = useDispatch();

    function handleChange(e: any) {
        act ?
            dispatch(setSymb(e.target?.value))
            :
            dispatch(setNumb(Number(e.target?.value)))
    };

    return (
        <input type='button' value={val} onClick={handleChange} className={styles.symbol} />
    )
}