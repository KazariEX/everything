import { defineConfig } from "node-modules-inspector";

export default defineConfig({
    defaultFilters: {
        sourceType: "prod",
        excludeWorkspace: true,
    },
    excludeDependenciesOf: [
        "eslint",
        "stylelint",
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/utils",
    ],
    excludePackages: [
        "typescript",
    ],
    publint: true,
});
