# React Component Generator

**React Component Generator** is a CLI tool for automating the creation of React component structures with TypeScript and BEM. This package helps you quickly generate files for new components, including `index.tsx`, typings, constants, and styles.

---

## Features

-   Generates a folder structure for a React component with:
    -   `index.tsx` — the main component file.
    -   `ComponentName.typings.ts` — for TypeScript typings.
    -   `ComponentName.const.ts` — constants and BEM selectors.
    -   `ComponentName.scss` — styling file.
-   Fully TypeScript-supported.
-   Configurable CLI interface.

---

## Installation

### Local (for development)

1. Clone the repository or download the source code.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Install dependencies:
    ```bash
    npm run build
    ```

### From npm

Install the package globally using npm:

```bash
npm install -g @sysoevandrey/generate-react-component
```

---

## Usage

### Globally

After a global installation, you can run the generate-react-component command in your terminal:

```bash
generate-react-component
```

The CLI will prompt you to provide:

1. The target directory for the component (e.g., ./src/components).
2. The component name (e.g., MyComponent).

It will generate the following structure:

```
src/components/MyComponent/
├── MyComponent.const.ts
├── MyComponent.scss
├── MyComponent.typings.ts
├── index.tsx
```

With the following templated content:

```
import type { FC } from 'react';

import { cnMyComponent } from './MyComponent.const';
import type { IMyComponentProps } from './MyComponent.typings';

import './MyComponent.scss';

export const MyComponent: FC<IMyComponentProps> = () => {
  return <p className={cnMyComponent}>MyComponent</p>;
};
```

### Locally (via script)

If the package is installed locally, use:

```bash
npx generate-react-component
```

---

## Customizing File Templates

### Templates

You can customize the file templates to suit your project. Templates are located in src/utils/templates.ts and return strings for file generation.

For example, to customize the index.tsx template:

```typescript
export const getIndexTemplate = (componentName: string): string =>
    `import React from 'react';\n\nexport const ${componentName} = () => {\n  return <div>${componentName}</div>;\n};\n`;
```

---

## License

MIT

---

## Support

If you have any questions or suggestions, please create an issue in the project repository or contact me.
