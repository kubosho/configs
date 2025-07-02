# Markdownlint Configuration

This configuration extends the [markdownlint Prettier style](https://github.com/DavidAnson/markdownlint/blob/main/style/prettier.json).

## Why use Prettier style?

We use the Prettier style configuration to maintain consistency with code formatting. This ensures that Markdown files follow similar formatting rules as our code files, creating a unified developer experience across all file types.

## Important: CLI Tool Differences

There are two popular markdownlint CLI tools with different capabilities:

### markdownlint-cli2 (Recommended)

- Supports the `extends` property for configuration inheritance
- Can use this configuration directly

### markdownlint-cli

- Does **not** support the `extends` property
- When using this tool, you'll need to manually merge the configuration with the Prettier style rules

Choose the appropriate CLI tool based on your project requirements.
