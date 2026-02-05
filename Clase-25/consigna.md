# Desarrollar la lista de tarjetas de colores de la Color Hunt
Pagina web: https://colorhunt.co

Dados los siguientes datos:
EN el app component tendran esta variable
const colors_card = [
    {
        id: 1,
        likes: 10,
        date: '3 days ago',
        colors:[
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
        ]
    },
    {
        id: 2,
        likes: 20,
        date: '2 days ago',
        colors:[
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
        ]
    },
    {
        id: 3,
        likes: 30,
        date: '1 day ago',
        colors:[
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
        ]
    }
]

Deberas renderizar la lista de tarjetas de colores y luego estilizar.

Componentes: 
    - CardPalleteList: Lista de tarjetas de colores
        props: colors_card
    - CardPallete: Tarjeta de color
        props: id, likes, date, colors
    - CardPalleteColorsList: La lista de colores
        props: colors
    - CardPalleteColor: Un color en puntual
        props: color