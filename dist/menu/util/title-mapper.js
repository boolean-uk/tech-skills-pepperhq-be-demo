import titles from '../../../data/titles.json' assert { type: "json" };
export const MapTitles = (menu) => {
    const titlesByID = [];
    console.log('titles', titles);
    titles.forEach((title) => {
        titlesByID[title.id] = title;
    });
    menu.categories = menu.categories.map(category => (Object.assign(Object.assign({}, category), { products: category.products.map(product => (Object.assign(Object.assign({}, product), { title: titlesByID[product.id] }))) })));
    return menu;
};
