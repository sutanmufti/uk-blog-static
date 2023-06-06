import {stories} from '@story/storylog'

/** @type {import('./$types').PageLoad} */
export function load(e){
    return {
        stories: stories
    }
}