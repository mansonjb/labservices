import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Fixe la racine du projet (repo imbriqué sous un dossier contenant d'autres lockfiles).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root: projectRoot },
};

export default nextConfig;
