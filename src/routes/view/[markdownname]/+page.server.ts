import MarkdownIt from 'markdown-it'
import fs from 'fs/promises'
import { error } from '@sveltejs/kit';
import metadata_block from 'markdown-it-metadata-block'
import yaml from 'yaml'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        // 'dsf/routes/app/Test-Markdown.md'

        
        const data = await fs.readFile(`./src/routes/app/${params.markdownname}`, { encoding: 'utf8' });
        const meta: {
            title?:string
            created?:string
            author?:string
            image?:string
            latitude?: string
            longitude?: string 
            tags?: string[]
            imagesrc?: string
        }={}
        const md = new MarkdownIt().use(metadata_block,{
            parseMetadata: yaml.parse,
            meta
          });    

        const result = md.render(data)
        return {
            story: result,
            params: params.markdownname,
            meta: meta
        }
    } catch {
        throw error(404, 'Story Not Found.');

    }
    // let md = new MarkdownIt();
}