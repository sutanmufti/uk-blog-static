
interface Story {
    title: string;
    author: string;
    description: string;
    created: string;
    markdownfile: string;
    latitude?: number;
    longitude?: number;
}
export const stories: Story[] =[
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'Test-Markdown.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'Test-Markdown.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'Test-Markdown.md'        
    },

]