const makePage = (data) => {
  return {
    components: data?.acf?.components.length > 0 ? data?.acf?.components?.map(item => ({
      ...item,
      component: item.acf_fc_layout
    })) : [],
    seo: {
      title: data.acf.title || data?.title?.rendered || '',
      description: data.acf.description || data?.title?.rendered || '',
      og_title: data.acf.og_title || data.acf.title || data?.title?.rendered || '',
      og_image: data.acf.og_image?.sizes?.medium_large || '',
      canonical: `${process.env.NEXT_PUBLIC_ROOT_URL}/${data.slug}`
    }
  }
}

export default makePage