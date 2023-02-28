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
exports.Cache = void 0;
const cache = {
    timeOfCache: null,
    data: null
};
const reCache = (fn) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fn();
    cache.timeOfCache = new Date();
    cache.data = data;
});
const isOutdated = (maxMins) => {
    console.log('isOutdated', cache.timeOfCache);
    if (!cache.timeOfCache) {
        return false;
    }
    const diff = Math.abs(new Date().valueOf() - cache.timeOfCache.valueOf());
    const minutes = Math.floor((diff / 1000) / 60);
    console.log('isOutdated', minutes, maxMins);
    return minutes > maxMins;
};
const Cache = (minutes, fn) => __awaiter(void 0, void 0, void 0, function* () {
    if (cache.timeOfCache && !isOutdated(minutes)) {
        return cache.data;
    }
    yield reCache(fn);
    return cache.data;
});
exports.Cache = Cache;
