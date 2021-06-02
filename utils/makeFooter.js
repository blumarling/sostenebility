const makeFooter = (data) => {
    return [
        ...data?.items.map(item => ({
            ...item,
            url: item?.url.indexOf('api') > -1 ? item?.url?.split('/').slice(3).join('') : item.url,
            children: item?.children?.length > 0 ? item?.children?.map(subitem => ({
                ...subitem,
                url: subitem?.url.indexOf('api') > -1 ? subitem?.url?.split('/').slice(3).join('') : subitem.url,
            })) : []
        }))
    ]
}

export default makeFooter