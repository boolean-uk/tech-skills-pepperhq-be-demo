import { Menu } from "../types/menu";
import titles from '../../../data/titles.json'
import { Title } from "../types/title";

export const MapTitles = (menu: Menu): Menu => {
    const titlesByID: Title[] = []
    titles.forEach((title: Title) => {
        titlesByID[title.id as keyof Title] = title
    })
    menu.categories = menu.categories.map(category => ({
        ...category,
        products: category.products.map(product => ({
            ...product,
            title: titlesByID[product.id]
        }))
    }))
    return menu
}