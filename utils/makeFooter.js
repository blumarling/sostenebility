const makeFooter = (data) => {
    return [
        ...data?.items.map(item => ({
            ...item
        }))
    ]
}

export default makeFooter