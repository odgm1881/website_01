// Eagerly import every product photo so Vite hashes and rewrites the URLs
// correctly for any deploy base. Access by file name without extension.
const modules = import.meta.glob<{ default: string }>("./images/*.jpg", {
  eager: true,
});

export const img: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const name = path.split("/").pop()!.replace(".jpg", "");
    return [name, mod.default];
  })
);
