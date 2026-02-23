/**
 * @module @minions-dev-prompts/sdk/schemas
 * Custom MinionType schemas for Minions Dev-prompts.
 */

import type { MinionType } from 'minions-sdk';

export const prompttemplateType: MinionType = {
  id: 'dev-prompts-prompt-template',
  name: 'Prompt template',
  slug: 'prompt-template',
  description: 'A reusable prompt template for gh agent-task create calls.',
  icon: '📝',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'template', type: 'string', label: 'template' },
    { name: 'variables', type: 'string', label: 'variables' },
    { name: 'exampleOutput', type: 'string', label: 'exampleOutput' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const promptchainType: MinionType = {
  id: 'dev-prompts-prompt-chain',
  name: 'Prompt chain',
  slug: 'prompt-chain',
  description: 'An ordered sequence of prompts that build on each other.',
  icon: '🔗',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'promptTemplateIds', type: 'string', label: 'promptTemplateIds' },
    { name: 'executionOrder', type: 'string', label: 'executionOrder' },
    { name: 'purpose', type: 'string', label: 'purpose' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const promptversionType: MinionType = {
  id: 'dev-prompts-prompt-version',
  name: 'Prompt version',
  slug: 'prompt-version',
  description: 'A versioned snapshot of a prompt template for auditing and rollback.',
  icon: '📌',
  schema: [
    { name: 'promptTemplateId', type: 'string', label: 'promptTemplateId' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'template', type: 'string', label: 'template' },
    { name: 'changedBy', type: 'string', label: 'changedBy' },
    { name: 'changeNotes', type: 'string', label: 'changeNotes' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  prompttemplateType,
  promptchainType,
  promptversionType,
];

