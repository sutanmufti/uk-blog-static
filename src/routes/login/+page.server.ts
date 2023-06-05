import { redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ cookies, request }) => {
        cookies.set('svelteSession', 'session svelte',{ path: '/' })
        throw redirect(307, '/')
        return { success: true };
    },
    logout: async ({cookies}) => {
        // TODO register the user
        cookies.delete('svelteSession', { path: '/' })
        throw redirect(307, '/')
    }
};