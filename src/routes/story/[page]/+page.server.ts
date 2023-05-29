import {stories} from '@story/storylog'

/** @type {import('./$types').PageLoad} */
export function load({params}){
    const {page} = params 
    const pagenum = Number(page);

    const logs = stories.slice(pagenum, pagenum+20);
    return {
        stories: logs
    }
}