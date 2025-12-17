export default {
  install(app) {
    // Import all Vue components from the components directory
    const components = import.meta.glob("../components/**/*.{vue,js,ts}", {
      eager: true,
    });

    // Register each component globally
    for (const [path, definition] of Object.entries(components)) {
      // Extract the component's file name and folder path to generate a tag name
      const componentName = path
        .replace("../components/", "") // Remove the base path
        .replace(/\.\w+$/, "") // Remove file extension
        .replace(/\//g, "-") // Replace folder slashes with dashes
        .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert PascalCase to kebab-case
        .toLowerCase(); // Ensure lower-case

      // Register the component globally
      app.component(componentName, definition.default || definition);
    }
  },
};
