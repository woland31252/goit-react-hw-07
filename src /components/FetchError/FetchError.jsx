import css from '../FetchError/FetchError.module.css';
export default function FetchError() {
    return (
        <div className={css.error}>
            <h2 className={css.errorTitle}>ERROR 404</h2>
            <p className={css.errorText}>Not Found Request</p>
        </div>
    )
}