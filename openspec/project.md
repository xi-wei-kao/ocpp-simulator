# Project Context

## Purpose
A simple chargepoint simulator for OCPP 1.6, used for testing purposes.

## Tech Stack
- Frontend: HTML, CSS, JavaScript, jQuery
- Communication: WebSockets
- Runtime: Node.js

## Project Conventions

### Code Style
There are no specific code style guidelines, formatting rules, or naming conventions.

### Architecture Patterns
The simulator is a single-page application built in a single HTML file. There are no immediate plans to change this architecture.

### Testing Strategy
Testing is performed manually using the simulator's UI.

### Git Workflow
- `main`: Release branch.
- `dev`: Development branch.
- Feature branches are created from `dev`.
- Feature branch naming convention: `feature/<feature_name>` (e.g., `feature/add-new-feature`).
- Feature branches are merged into `dev`.

## Domain Context
The project is a charge point simulator for the OCPP (Open Charge Point Protocol) version 1.6. The simulator should adhere to the specifications outlined in the OCPP 1.6 documentation. It mimics the behavior of a physical charging station, allowing users to send and receive OCPP messages to and from a central management system.

## Important Constraints
- The implementation should follow the OCPP 1.6 specification.

## External Dependencies
- jQuery
- WebSockets