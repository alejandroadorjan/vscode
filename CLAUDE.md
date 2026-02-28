# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Run

```bash
# Install dependencies
npm i

# Run VS Code from source
bash scripts/code.sh          # macOS/Linux
scripts\code.bat              # Windows

# Run unit tests
bash scripts/test.sh                        # all unit tests
bash scripts/test.sh --grep <pattern>       # filtered unit tests

# Run integration tests
bash scripts/test-integration.sh            # macOS/Linux
scripts\test-integration.bat                # Windows

# Check for layer violations
npm run valid-layers-check
```

## Validating TypeScript Changes

**MANDATORY**: Always check the `VS Code - Build` watch task output via `#runTasks/getTaskOutput` for compilation errors before running any script or declaring work complete. Fix all compilation errors before proceeding.

- NEVER run tests if there are compilation errors
- NEVER use `npm run compile`; use `#runTasks/getTaskOutput` instead
- The `VS Code - Build` task runs `Core - Build` and `Ext - Build` incrementally

## Architecture

VS Code uses a strict **layered architecture** (no upward imports allowed):

1. `src/vs/base/` — Foundation utilities, no VS Code dependencies
2. `src/vs/platform/` — Platform services and dependency injection infrastructure
3. `src/vs/editor/` — Text editor implementation (language services, syntax, editing)
4. `src/vs/workbench/` — Main application UI and features
   - `browser/` — Core workbench UI parts and layout
   - `services/` — Service implementations
   - `contrib/` — Feature contributions (git, debug, search, terminal, chat, etc.)
   - `api/` — Extension host and VS Code API implementation
5. `src/vs/code/` — Electron main process
6. `src/vs/server/` — Remote server implementation

**Key patterns:**
- **Dependency injection** — Services injected through constructor parameters; non-service params must come after service params
- **Contribution model** — Features register themselves in contribution registries and extension points; do not add code directly to core
- **Service interfaces** — Services are defined as interfaces (e.g. `IFileService`) with implementations registered via `registerSingleton`

`extensions/` contains first-party extensions (language support, git, themes, etc.) that ship with VS Code. Each follows standard VS Code extension structure with `package.json` contribution points.

## Coding Guidelines

### Formatting
- Tabs, not spaces
- Arrow function parameters only parenthesized when necessary: `x => x` not `(x) => x`
- Always use curly braces for loop/conditional bodies
- Top-level functions: prefer `export function x() {}` over `export const x = () => {}`

### Naming
- PascalCase for types and enum values
- camelCase for functions, methods, properties, local variables
- Service interfaces prefixed with `I` (e.g. `IEditorService`)

### Strings & i18n
- User-visible strings: double quotes, externalized via `nls.localize()` from `vs/nls`
- Internal strings: single quotes
- No string concatenation for localized strings — use placeholders (`{0}`)
- UI labels (commands, buttons, menus): Title-Case, prepositions ≤4 letters lowercase unless first/last word

### Code Quality
- All files must include the Microsoft copyright header
- Use `async`/`await` over `.then()` chains
- No `any` or `unknown` without strong justification
- Disposables: register immediately after creation using `DisposableStore`, `MutableDisposable`, or `DisposableMap`. Methods called repeatedly must return `IDisposable` rather than registering to the class.
- Open editors via `IEditorService`, not `IEditorGroupsService.activeGroup.openEditor`
- File watching: use correlated watchers via `fileService.createWatcher`
- Tooltips: use `IHoverService`
- Prefer named regex capture groups over numbered

### Tests
- Use `describe`/`test` consistent with file's existing pattern
- Prefer `assert.deepStrictEqual` (snapshot style) over multiple individual assertions
- Integration tests end with `.integrationTest.ts` or live in `extensions/`
