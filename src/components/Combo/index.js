import React, {Fragment, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    getData
} from '../../store/Combo/Actions';
import './styles.css';

function Combo() {
    const {
        combo: {
            gettingData,
            data,
        }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <Fragment>
            {!gettingData && data.length}
        </Fragment>
    );
}

export default Combo;
