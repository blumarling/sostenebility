const makeMenu = (data) => {
    return [
        ...data?.items.map(item => {
            return {
                ...item,
                url: item?.url.indexOf('cms') > -1 ? item?.url?.split('cms').pop().slice(0,-1) : item.url,
                children: item?.children?.length > 0 ? item?.children?.map(subitem => ({
                    ...subitem,
                    url: subitem?.url.indexOf('cms') > -1 ? subitem?.url?.split('cms').pop().slice(0,-1) : subitem.url,
                })) : []
            }
        })
    ]
}

export default makeMenu