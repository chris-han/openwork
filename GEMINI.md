# OpenWork Workspace

OpenWork is a desktop application and suite of tools built on top of [OpenCode](https://opencode.ai) to create, manage, and share agentic workflows as productized experiences. It aims to make agentic work accessible to non-technical users by providing a guided UI instead of a terminal interface.

## Project Structure

This is a **monorepo** managed with `pnpm`.

*   **`packages/app/`**: The main UI application (likely SolidJS + Vite + Tailwind CSS).
*   **`packages/desktop/`**: The Tauri desktop shell configuration and Rust backend.
*   **`packages/headless/`**: A headless CLI version of OpenWork (`openwrk`).
*   **`packages/owpenbot/`**: A WhatsApp bridge bot (`owpenbot`).
*   **`packages/server/`**: The backend server logic (likely for managing OpenCode instances).
*   **`packages/packaging/`**: Packaging scripts (e.g., AUR).
*   **`.opencode/`**: Contains OpenCode configuration, skills, and agent instructions.

## Getting Started

### Prerequisites

*   **Node.js** & **pnpm**
*   **Rust toolchain** (for building the Tauri desktop app)
*   **OpenCode CLI** (`opencode`) must be installed and in your PATH.

### Installation

```bash
pnpm install
```

### Running the Project

**1. Desktop Application (Recommended):**
Runs the full desktop experience (UI + Tauri backend).

```bash
pnpm dev
```

**2. Web UI Only:**
Runs the frontend in a browser, useful for UI development without the desktop shell overhead.

```bash
pnpm dev:ui
# OR
pnpm dev:web
```

### Other Key Commands

*   **Build Desktop:** `pnpm build`
*   **Build Web UI:** `pnpm build:ui`
*   **Typecheck:** `pnpm typecheck`
*   **E2E Tests:** `pnpm test:e2e`

## Architecture Highlights

*   **Host Mode:** Runs `opencode serve` locally, allowing the desktop app to interact with the local filesystem and agent capabilities.
*   **Client Mode:** Connects to a remote OpenCode server.
*   **Extensibility:** Uses OpenCode plugins and skills.
*   **Tech Stack:** SolidJS (Frontend), Tauri (Desktop), Rust (Backend), Node.js (Tooling/Server).

## Development Conventions

*   **Package Management:** Use `pnpm`.
*   **Documentation:**
    *   `AGENTS.md`: Guide for AI agents working on the repo.
    *   `ARCHITECTURE.md`, `PRODUCT.md`, `VISION.md`: High-level project documentation.
    *   `packages/app/pr/`: PRDs (Product Requirement Documents) for new features.
