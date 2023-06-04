/**
 * Story log is how we register it to {base}/story/{page}
 * if a markdown exists then the page is published
 * but to make it available to the story page, then append it to the stories variable.
 * 
 */



export interface Story {
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
        title: 'Test Markdown 1',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown 2',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown Next page',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        
    },
    

]