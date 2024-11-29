import inquirer from 'inquirer';

export interface UserInput {
    targetPath: string;
    componentName: string;
}

/**
 * Asks the user for the path to the component and the component name.
 *
 * The path to the component should be a relative path from the current working directory.
 * The component name should start with a capital letter.
 *
 * @returns An object with the user's input.
 */
export const askQuestions = async (): Promise<UserInput> => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'targetPath',
            message: 'Path to component:',
            default: './src/components',
            validate: (input) =>
                input ? true : 'Path to component is required.',
        },
        {
            type: 'input',
            name: 'componentName',
            message: 'Component name:',
            validate: (input) =>
                /^[A-Z][A-Za-z0-9]*$/.test(input)
                    ? true
                    : 'Component name should start with a capital letter.',
        },
    ]);
};
