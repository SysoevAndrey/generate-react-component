import fs from 'fs';
import path from 'path';

/**
 * Creates a file with the specified content at the given file path.
 *
 * This function writes the provided content to a file at the specified
 * path, using UTF-8 encoding. If the file does not exist, it will be created.
 *
 * @param filePath - The path where the file will be created.
 * @param content - The content to write to the file.
 */
export const createFile = (filePath: string, content: string): void => {
    fs.writeFileSync(filePath, content, 'utf8');
};

/**
 * Creates a directory at the given path.
 *
 * This function checks if the directory already exists. If it does not,
 * it is created with the specified path. If it does exist, no action is
 * taken.
 *
 * @param dirPath - The path where the directory will be created.
 */
export const createDirectory = (dirPath: string): void => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

/**
 * Joins one or more path segments into a single path.
 *
 * This function takes an arbitrary number of path segments and
 * combines them into a single path. The path segments are joined
 * using the appropriate separator for the current operating system.
 *
 * @example
 * joinPath('a', 'b', 'c');  // returns 'a/b/c'
 * joinPath('a', 'b', 'c/'); // returns 'a/b/c/'
 *
 * @param {...string[]} segments - The path segments to join.
 * @returns The joined path.
 */
export const joinPath = (...segments: string[]): string => {
    return path.join(...segments);
};
