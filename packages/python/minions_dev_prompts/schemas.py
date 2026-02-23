"""
Minions Dev-prompts SDK — Type Schemas
Custom MinionType schemas for Minions Dev-prompts.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

prompt_template_type = MinionType(
    id="dev-prompts-prompt-template",
    name="Prompt template",
    slug="prompt-template",
    description="A reusable prompt template for gh agent-task create calls.",
    icon="📝",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="template", type="string", label="template"),
        FieldDefinition(name="variables", type="string", label="variables"),
        FieldDefinition(name="exampleOutput", type="string", label="exampleOutput"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

prompt_chain_type = MinionType(
    id="dev-prompts-prompt-chain",
    name="Prompt chain",
    slug="prompt-chain",
    description="An ordered sequence of prompts that build on each other.",
    icon="🔗",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="promptTemplateIds", type="string", label="promptTemplateIds"),
        FieldDefinition(name="executionOrder", type="string", label="executionOrder"),
        FieldDefinition(name="purpose", type="string", label="purpose"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

prompt_version_type = MinionType(
    id="dev-prompts-prompt-version",
    name="Prompt version",
    slug="prompt-version",
    description="A versioned snapshot of a prompt template for auditing and rollback.",
    icon="📌",
    schema=[
        FieldDefinition(name="promptTemplateId", type="string", label="promptTemplateId"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="template", type="string", label="template"),
        FieldDefinition(name="changedBy", type="string", label="changedBy"),
        FieldDefinition(name="changeNotes", type="string", label="changeNotes"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    prompt_template_type,
    prompt_chain_type,
    prompt_version_type,
]

