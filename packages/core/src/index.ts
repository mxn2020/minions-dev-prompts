/**
 * Minions Dev-prompts SDK
 *
 * Reusable prompt templates, prompt chains, and prompt versioning for agent-tasks
 *
 * @module @minions-dev-prompts/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Dev-prompts.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
