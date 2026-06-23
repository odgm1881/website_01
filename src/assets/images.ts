// Eagerly import every product photo so Vite hashes and rewrites the URLs
// correctly for any deploy base. Access by file name without extension.
// Eagerly resolve every product photo URL (Vite hashes them and rewrites
// for any deploy base). These are just URL strings; the actual image bytes
// are fetched by the <img> tags, which use loading="lazy" for offscreen ones.
const modules = import.meta.glob<{ default: string }>("./images/*.webp", {
  eager: true,
});

export const img: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const name = path.split("/").pop()!.replace(".webp", "");
    return [name, mod.default];
  })
);
