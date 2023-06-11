import {stories} from '@story/storylog'

/** @type {import('./$types').PageLoad} */
export function load({params}){
    const {page} = params 
    const pagenum = Number(page);

    const perpage = 5

    const storieslength = stories.length

    const maxpage = Math.ceil( storieslength / perpage) - 1

    const logs = stories.slice(pagenum*perpage, pagenum*perpage+perpage);
    return {
        stories: logs,
        page: Number(page),
        maxpage: Number(maxpage)
    }
}

export const actions = {

    default: async () =>{

        return {}
    }


}