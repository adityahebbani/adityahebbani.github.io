// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

function normalizeBase(base) {
  if (!base) return '/';
  let result = base;
  if (!result.startsWith('/')) result = `/${result}`;
  if (!result.endsWith('/')) result = `${result}/`;
  return result;
}

function inferGitHubPagesUrls() {
  const repoSlug = process.env.GITHUB_REPOSITORY;
  if (!repoSlug) return null;

  const [owner, repo] = repoSlug.split('/');
  if (!owner || !repo) return null;

  const isUserOrOrgPagesRepo = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  const base = isUserOrOrgPagesRepo ? '/' : `/${repo}/`;
  const site = isUserOrOrgPagesRepo
    ? `https://${owner}.github.io/`
    : `https://${owner}.github.io/${repo}/`;

  return { base, site };
}

const inferred = process.env.GITHUB_ACTIONS === 'true' ? inferGitHubPagesUrls() : null;
const site = process.env.SITE_URL ?? inferred?.site ?? 'https://example.com/';
const base = normalizeBase(process.env.BASE_PATH ?? inferred?.base ?? '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});