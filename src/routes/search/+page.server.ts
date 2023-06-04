import { fail, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import {stories} from '@story/storylog'
import type {Story} from '@story/storylog'
import { base } from '$app/paths';

export function load (r) {

    const ipaddress= r.getClientAddress()

    const {method} = r.request

    if (method === 'GET'){
        throw redirect(307, `story/0`)
    }

    return {
        ip: ipaddress,
        method: r.request.method,
    }

    
}




/** @type {import('./$types').Actions} */
export const actions = {

    default: async ({ cookies, request }) => {
        const data = await request.formData()
        const keywords  =  data.get("keywords") as string

        if (keywords){
            const filtered = stories.filter(d=>d.description.toLowerCase().includes(keywords.toLowerCase()) || d.title.toLowerCase().includes(keywords.toLowerCase()) || d.author.toLowerCase().includes(keywords.toLowerCase()))
            return {
                keywords: keywords,
                stories: filtered,
            } satisfies {
                keywords: string;
                stories: Story[];
            }

        }
        throw redirect(307, `story/0`)
        throw redirect(307, `story/0`)
    }
};