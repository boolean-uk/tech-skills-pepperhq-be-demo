"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenu = void 0;
const menu_service_1 = require("./menu.service");
const cacher_1 = require("../cacher/cacher");
const GetMenu = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield (0, cacher_1.Cache)(1, menu_service_1.GetThirdPartyMenu);
    res.status(200).json(menu);
});
exports.GetMenu = GetMenu;
