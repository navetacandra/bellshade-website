/* eslint-disable import/no-anonymous-default-export */
export default function ManifestGenerator(req: any, res: any) {
  const { query } = req;
  const { theme, description, title } = query;
  const manifest = {
    $schema: "https://json.schemastore.org/web-manifest-combined.json",
    background_color: theme,
    description,
    display: "standalone",
    id: process.env.PUBLIC_URI || "/",
    name: title || "Bellshade",
    orientation: "portrait-primary",
    short_name: "Bellshade",
    start_url: process.env.PUBLIC_URI || "/",
    theme_color: theme,
    icons: [
      {
        src: "/icon/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75",
      },
      {
        src: "/icon/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0",
      },
      {
        src: "/icon/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5",
      },
      {
        src: "/icon/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0",
      },
      {
        src: "/icon/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0",
      },
      {
        src: "/icon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0",
      },
    ],
  };

  res.status(200).json(manifest);
}
