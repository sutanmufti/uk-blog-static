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
    latlong?: [number, number]
}
export const stories: Story[] =[
    {
        title: 'Test Markdown 1',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md',
        latlong: [51.527409, -0.110218]
    },
    {
        title: 'Test Markdown 2',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'  ,
        latlong: [51.541411, -0.226599]      
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'  ,
        latlong: [51.578625, -0.117864]      
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'  ,
        latlong: [51.466266, -0.005374]      
    },
    {
        title: 'Test Markdown',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'  ,
        latlong: [51.541241, 0.235574]      
    },
    {
        title: 'Test Markdown Next page',
        author: 'Sutan Mufti',
        created: '2023-5-29',
        description: 'this is just to test posting a story. This should link to the markdown.',
        markdownfile: 'network.md'        ,
        latlong: [50.968047, -1.653899]
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