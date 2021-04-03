export default {
    components: [
        {
            component: "Hero",
            id: `1234`,
            title: `Sostenibility.\nStare bene, nel bello.`,
            titleColor: `text-white`,
            full: true
        },
        {
            component: "BlockTitleParagraph",
            id: `1234d`,
            title: `Sostenibility. Riqualificazione energetica, hi tech e estetica.`,
            paragraph: `Sostenibility è una scelta di etica, estetica e salute. Attraverso la consulenza, la selezione delle tecnologie più evolute e la messa in opera certificata, Sostenibility ti offre un servizio di riqualificazione energetica tailor made in un’ottica di sostenibilità, forte risparmio energetico e alto impatto estetico. E ora goditela. Sostenibility è stare bene, benissimo, nella bellezza.`,
            titleColor: 'text-primary-900',
            paragraphColor: 'text-primary-900',
            paddingBottom: 0,
            boxed: true
        },
        {
            component: "GridBox",
            id: `1234sdfdsd`,
            title: `I tre pilastri dell’efficienza energetica`,
            titleColor: 'text-primary-900',
            boxed: true,
            singleItemComponent: 'SingleGridItem01', 
            list: [
                {
                    image: "/img/icon-risparmiare-energia.svg",
                    title: "Risparmiare energia",
                    titleColor: 'text-primary-900',
                    paragraphColor: 'text-primary-900',
                    paragraph: "Il primo passo verso l’efficienza energetica consiste nell’isolare termicamente l’involucro dell’immobile, le pareti, le finestre, i balconi e il tetto, al fine di non sprecare l’energia utilizzata.",
                    link: "#",
                    id: "123"
                },
                {
                    image: "/img/icon-utilizzare-energia.svg",
                    title: "Utilizzare energia",
                    titleColor: 'text-primary-900',
                    paragraphColor: 'text-primary-900',
                    paragraph: "Il secondo passo prevede l’utilizzo di sistemi più efficienti per riscaldare e climatizzare l’immobile, e per produrre l’acqua calda sanitaria.",
                    id: "123ss",
                    link: "#"
                },
                {
                    image: "/img/icon-produrre-energia.svg",
                    title: "Produrre energia",
                    titleColor: 'text-primary-900',
                    paragraphColor: 'text-primary-900',
                    paragraph: "Il terzo passo consiste nel dotare l’immobile di un sistema di produzione di energia alternativa, come ad esempio un impianto fotovoltaico.",
                    id: "12asdsad3",
                    link: "#"
                }
            ]
        },
        {
            component: "BlockImageParagraph",
            id: `1234sdaa`,
            title: `Residenze private`,
            paragraph: `Se vuoi un ambiente sano per te, la tua famiglia e il Pianeta, se ami vivere e fare vivere gli altri nella bellezza, se pensi che il risparmio energetico sia una scelta intelligente e etica, Sostenibility è la risposta.`,
            paragraphColor: 'text-primary-900',
            link: '#'
        },
        {
            component: "BlockParagraphImage",
            id: `123asdasfdas4`,
            title: `Aziende e impianti industriali`,
            paragraph: `Se siete attenti al welfare e volete un ambiente di lavoro sano per voi, i vostri dipendenti e il Pianeta, se amate vivere e fare vivere gli altri nella bellezza, se pensate che il risparmio energetico sia una scelta etica e anche intelligente, Sostenibility è la risposta.`,
            paragraphColor: 'text-primary-900',
            link: '#'
        },
        {
            component: "BlockImageParagraph",
            id: '233',
            title: 'Strutture e centri commerciali',
            paragraph: 'Se siete attenti al welfare e volete creare o ricreare un ambiente di lavoro sano per voi, i vostri dipendenti, il pubblico e il Pianeta, se date un alto valore alla bellezza, se pensate che il risparmio energetico sia una scelta intelligente e etica, Sostenibility  è la risposta',
            paragraphColor: 'text-primary-900',
            link: '#'
        },
    ]
}