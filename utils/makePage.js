const makePage = (data) => {
  return {
    isLanding: data?.acf?.isLanding || false,
    components: data?.acf?.components.length > 0 ? data?.acf?.components?.map(item => ({
      ...item,
      component: item.acf_fc_layout
    })) : [],
    seo: {
      title: data.acf.title || 'Riqualificazione Energetica Hi Tech e Estetica',
      description: data.acf.description || 'Sostenibility offre un servizio di riqualificazione energetica tailor made in un’ottica di sostenibilità, forte risparmio energetico e alto impatto estetico.',
      og_title: data.acf.og_title || data.acf.title || data?.title?.rendered || '',
      og_image: data.acf.og_image?.sizes?.medium_large || '',
      canonical: `${process.env.NEXT_PUBLIC_ROOT_URL}/${data.slug}`
    }
  }
}

export default makePage