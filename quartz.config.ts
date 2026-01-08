import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "filip-tripkov-iliev.github.io/FTI-digital-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
  lightMode: {
    light: "#f0f9ff",        // Светло сина позадина
    lightgray: "#e0f2fe",    // Сина sidebar
    gray: "#94a3b8",         // Сиво за линии
    darkgray: "#334155",     // Темно сиво за текст
    dark: "#1e293b",         // Црно за наслови
    secondary: "#ef4444",    // Црвени линкови
    tertiary: "#10b981",     // Зелени акценти
    highlight: "rgba(16, 185, 129, 0.15)",
    textHighlight: "#fef08a",
  },
  darkMode: {
    light: "#0f172a",        // Темна позадина
    lightgray: "#1e293b",    // Темна sidebar
    gray: "#475569",         // Сиво
    darkgray: "#cbd5e1",     // Светло сиво за текст
    dark: "#f1f5f9",         // Бело за наслови
    secondary: "#22d3ee",    // Сино за линкови
    tertiary: "#34d399",     // Зелено
    highlight: "rgba(52, 211, 153, 0.15)",
    textHighlight: "#fbbf24",
    },
   },
  },
 },
 plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
