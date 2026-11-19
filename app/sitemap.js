export default function sitemap() {
  const baseUrl = "https://www.orbisnexa.com";

  const staticRoutes = [
    "",
    "/about",
    "/destinations",
    "/blogs",
    "/ielts-preparation",
    "/become-a-partner",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const countryCodes = ["us", "gb", "ca", "au", "de", "it", "fr", "fi", "se"];
  const destinationRoutes = countryCodes.map((code) => ({
    url: `${baseUrl}/destinations/${code}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...destinationRoutes];
}
