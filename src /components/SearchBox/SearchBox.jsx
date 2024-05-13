import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findContactFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
export default function SearchBox() {
    const findId = useId();
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);
    return (
        <div className={css.findContainer}>
            <label className={css.findLabel} htmlFor={findId}>Find contacts by name</label>
            <input className={css.findInput}
                type="text"
                id={findId}
                value = {filter||""}
                onChange={(evt) => { dispatch(findContactFilter(evt.target.value)) }} />
        </div>
    )
}