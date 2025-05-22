class FileContent {
  private componentName: string;

  /**
   * Class constructor.
   *
   * @param componentName - name of the component
   */
  constructor(componentName: string) {
    this.componentName = componentName;
  }

  /**
   * Generates the content for the index file of a React component.
   *
   * The generated file includes:
   * - Import statements for React's `FC` type, component's BEM class name, typings, and styles.
   * - A functional component definition with a default export.
   *
   * @returns A string containing the TypeScript code for the component's index file.
   */
  public makeIndexFile(): string {
    const componentName = this.componentName;
    return `import type { FC } from 'react';\n\nimport { cn${componentName} } from './${componentName}.const';\nimport type { I${componentName}Props } from './${componentName}.typings';\n\nimport './${componentName}.scss';\n\nexport const ${componentName}: FC<I${componentName}Props> = () => {\n  return <p className={cn${componentName}}>${componentName}</p>;\n};\n`;
  }

  /**
   * Generates the content for the typings file of a React component.
   *
   * The generated file includes an empty interface for component props.
   *
   * @returns A string containing the TypeScript code for the component's typings file.
   */
  public makeTypingsFile(): string {
    const componentName = this.componentName;
    return `export interface I${componentName}Props {}\n`;
  }

  /**
   * Generates the content for the constant file of a React component.
   *
   * The generated file imports the `cn` function from `@bem-react/classname` and
   * defines a constant with a lower-cased version of the component name. The
   * constant is then exported.
   *
   * @returns A string containing the TypeScript code for the component's constant file.
   */
  public makeConstFile(): string {
    const componentName = this.componentName;
    const componentNameLowerCase =
      componentName.charAt(0).toLowerCase() + componentName.slice(1);
    return `import { cn } from '@bem-react/classname';\n\nconst ${componentNameLowerCase}Cn = cn('${componentName}');\n\nexport const cn${componentName} = ${componentNameLowerCase}Cn();\n`;
  }

  /**
   * Generates the content for the style file of a React component.
   *
   * The generated file defines a CSS class with the same name as the component.
   *
   * @returns A string containing the CSS code for the component's style file.
   */
  public makeStyleFile(): string {
    const componentName = this.componentName;
    return `.${componentName} {}\n`;
  }
}

export default FileContent;
