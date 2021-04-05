const makePage = (data) => {
    return {
        components: data?.acf?.components.length > 0 ? data?.acf?.components?.map(item => ({
            ...item,
            component: item.acf_fc_layout
        })) : []
    }
}

export default makePage