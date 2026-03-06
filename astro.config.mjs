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

function normalizeSiteUrl(url) {
  if (!url) return null;
  let result = url.trim();
  if (!result) return null;
  if (!/^https?:\/\//i.test(result)) result = `https://${result}`;
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

function inferHostingSiteUrl() {
  // Vercel
  if (process.env.VERCEL_URL) return normalizeSiteUrl(process.env.VERCEL_URL);

  // Netlify: URL=https://<site>.netlify.app (or custom domain)
  if (process.env.URL) return normalizeSiteUrl(process.env.URL);

  // Cloudflare Pages: CF_PAGES_URL=https://<project>.pages.dev
  if (process.env.CF_PAGES_URL) return normalizeSiteUrl(process.env.CF_PAGES_URL);

  return null;
}

const inferred = process.env.GITHUB_ACTIONS === 'true' ? inferGitHubPagesUrls() : null;
const site =
  normalizeSiteUrl(process.env.SITE_URL) ??
  inferred?.site ??
  inferHostingSiteUrl() ??
  'https://example.com/';
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