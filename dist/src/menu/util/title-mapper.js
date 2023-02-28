"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapTitles = void 0;
const titles_json_1 = __importDefault(require("../../../data/titles.json"));
const MapTitles = (menu) => {
    const titlesByID = [];
    titles_json_1.default.forEach((title) => {
        titlesByID[title.id] = title;
    });
    menu.categories = menu.categories.map(category => (Object.assign(Object.assign({}, category), { products: category.products.map(product => (Object.assign(Object.assign({}, product), { title: titlesByID[product.id] }))) })));
    return menu;
};
exports.MapTitles = MapTitles;
