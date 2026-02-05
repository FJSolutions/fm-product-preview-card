import fs from "fs-extra";
import path from "node:path";
import {ensureDir} from "fs-extra/esm";

const run = async () => {
    // Configure run
    const outputDir = "docs"

    // Clean up the last build
    await fs.remove(outputDir)
    await fs.ensureDir(outputDir)

    // Copy the index file
    await fs.copy("index.html", path.join(outputDir, "index.html"));

    // Copy the stylesheet
    await ensureDir(path.join(outputDir, "styles" ));
    await fs.copy("styles/main.css", path.join(outputDir, "styles/main.css"));

    // Copy the images
    await ensureDir(path.join(outputDir, "images" ));
    await fs.copy("images/icon-cart.svg", path.join(outputDir, "images/icon-cart.svg"));
    await fs.copy("images/image-product-desktop.jpg", path.join(outputDir, "images/image-product-desktop.jpg"));
    await fs.copy("images/image-product-mobile.jpg", path.join(outputDir, "images/image-product-mobile.jpg"));
    await fs.copy("images/favicon-32x32.png", path.join(outputDir, "images/favicon-32x32.png"));

    // Copy the fonts
    // await ensureDir(path.join(outputDir, "assets", "fonts" ));
    // await fs.copy("assets/fonts/outfit/Outfit-VariableFont_wght.ttf", path.join(outputDir, "assets/fonts/outfit/Outfit-VariableFont_wght.ttf"));
    // await fs.copy("assets/fonts/young-serif/YoungSerif-Regular.ttf", path.join(outputDir, "assets/fonts/young-serif/YoungSerif-Regular.ttf"));

    console.log(`Output to '${outputDir}' `);
}

export default run()
