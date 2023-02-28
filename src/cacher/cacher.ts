import { Menu } from "../menu/types/menu"

interface Cache {
    timeOfCache: Date | null,
    data: Menu | null
}

const cache: Cache = {
    timeOfCache: null,
    data: null
}

const reCache = async (fn: () => Promise<Menu>): Promise<void> => {
    const data = await fn()
    cache.timeOfCache = new Date()
    cache.data = data
}

const isOutdated = (maxMins: number): boolean => {
    if(!cache.timeOfCache) {
        return false
    }
    const diff = Math.abs(new Date().valueOf() - cache.timeOfCache.valueOf());
    const minutes = Math.floor((diff/1000)/60)
    return minutes > maxMins
}

export const Cache = async (minutes: number, fn: () => Promise<Menu>) => {
    if(cache.timeOfCache && !isOutdated(minutes)) {
        return cache.data
    }
    await reCache(fn)
    return cache.data
}