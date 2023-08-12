interface IPlans {
    title: string
    price: string
    list: { text: string }[]
}

export const plansData: IPlans[] = [{
    title: 'Inicio',
    price: '$1500 Mes',
    list: [{ text: '30 episodios' }, { text: 'Estadisticas' }, { text: 'App para grabar' }]
}, {
    title: 'Negocio',
    price: '$15000 Mes',
    list: [{ text: 'Episodios ilimitados' }, { text: 'Todas las plataformas' }, { text: 'Estadisticas' }, { text: 'App para grabar' }, { text: 'Podcast pagados' }]
}, {
    title: 'Pro',
    price: '$18000 Mes',
    list: [{ text: '100 epidodios' }, { text: 'Todas las plataformas' }, { text: 'Estadisticas' }, { text: 'App para grabar' }]
}]