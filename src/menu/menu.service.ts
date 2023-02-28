import { Menu } from "./types/menu";
import { MapTitles } from "./util/title-mapper";

const ApiURL: string = "http://backend-challenge-pos.pepperhq.com/menu.json"

export const GetThirdPartyMenu = async (): Promise<Menu> => {
    console.log('making request to third party API')
    const menu = await fetch(ApiURL).then(res => res.json()) as unknown as Menu
    
    return MapTitles(menu)
}