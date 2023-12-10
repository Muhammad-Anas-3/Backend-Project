const asyncHandler = (requestHandle) => {
    (req, res, next) => {
        Promise.resolve().catch((err) => next(err, 'error handling request'))
    }
}

export { asyncHandler }