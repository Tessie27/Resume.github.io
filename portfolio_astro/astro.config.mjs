// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://Tessie27.github.io',
    base: process.env.GITHUB_ACTIONS ? '/Resume.github.io' : '/',
    output: 'static',
    trailingSlash: 'always',
});
