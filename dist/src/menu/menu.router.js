"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRouter = void 0;
const express_1 = __importDefault(require("express"));
const apicache_1 = __importDefault(require("apicache"));
const menu_controller_1 = require("./menu.controller");
const cache = apicache_1.default.middleware;
exports.MenuRouter = express_1.default.Router();
exports.MenuRouter.get('/', cache('5 minutes'), menu_controller_1.GetMenu);
