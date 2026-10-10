function Badge({ label, variant = 'cuisine' }) {
    return <span className={`badge badge--${variant}`}>{label}</span>
}

export default Badge