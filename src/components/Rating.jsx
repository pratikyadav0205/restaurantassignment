function Rating({ value, max = 5 }) {
    return (
        <p className="rating">
            Rating: {value.toFixed(1)} / {max}
        </p>
    )
}

export default Rating