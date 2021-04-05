const makeMenu = (data) => {
    return [
        ...data?.items.map(item => ({
            ...item
        }))
    ]
}

export default makeMenu