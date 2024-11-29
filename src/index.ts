#!/usr/bin/env node

import { askQuestions } from './cli/prompts';
import { createFile, createDirectory, joinPath } from './utils/fileSystem';
import FileContent from './utils/templates';

(async () => {
    try {
        const { targetPath, componentName } = await askQuestions();

        const componentDir = joinPath(process.cwd(), targetPath, componentName);
        createDirectory(componentDir);

        const fileContent = new FileContent(componentName);

        createFile(
            joinPath(componentDir, 'index.tsx'),
            fileContent.makeIndexFile()
        );
        createFile(
            joinPath(componentDir, `${componentName}.typings.ts`),
            fileContent.makeTypingsFile()
        );
        createFile(
            joinPath(componentDir, `${componentName}.const.ts`),
            fileContent.makeConstFile()
        );
        createFile(
            joinPath(componentDir, `${componentName}.scss`),
            fileContent.makeStyleFile()
        );

        console.log(
            `Component ${componentName} has been created in ${componentDir}`
        );
    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
})();
