# Proposal: Separate Two-Gun UI

## Summary
This proposal aims to enhance the user interface of the OCPP 1.6 Chargebox Simulator by providing a clearer and more distinct separation of controls and status indicators for each charging gun (connector) in a two-gun setup. This will improve the simulator's usability, especially for automated testing and scenarios where direct manual interaction is limited, by making it easier to identify and control individual connectors.

## Motivation
The current simulator, while supporting two-gun charging functionality, may have UI elements that are not sufficiently distinct or grouped for each connector. This can lead to ambiguity when attempting to control or monitor specific connectors, particularly in automated testing environments or when debugging complex charging scenarios. A clearer UI separation will reduce errors, improve test script reliability, and provide a more intuitive understanding of each connector's state.

## Proposed Changes
1.  **Distinct Grouping for Connector Controls:** Ensure that all controls and displays related to Connector 1 (e.g., Authorize, Start Transaction, Stop Transaction, Status Notification, Meter Values inputs/buttons) are visually grouped and clearly labeled as belonging to Connector 1. The same will apply to Connector 2.
2.  **Unique and Consistent Element IDs:** Verify and, if necessary, update HTML element IDs to be unique and consistently suffixed (e.g., `-1` for Connector 1, `-2` for Connector 2) for all connector-specific interactive elements and display areas. This will facilitate easier programmatic access and manipulation.
3.  **Visual Separators/Containers:** Introduce clear visual separators (e.g., `<hr>`, distinct `div` containers with borders/backgrounds) to delineate the sections for Connector 1 and Connector 2 within the UI.
4.  **Review Shared Controls:** Identify any controls that are currently shared but should logically be connector-specific, and propose their duplication and adaptation for each connector.

## Acceptance Criteria
-   The UI clearly distinguishes between controls and status displays for Connector 1 and Connector 2.
-   Each connector's section (e.g., for Meter Values, Transaction controls) is visually separated and labeled.
-   All interactive HTML elements (buttons, inputs, selects) related to a specific connector have unique IDs that clearly associate them with that connector (e.g., `id="start-1"`, `id="start-2"`).
-   Automated scripts can reliably target and interact with controls for Connector 1 independently of Connector 2, and vice-versa.
-   No regressions are introduced in the functionality of single-gun charging or existing two-gun charging logic.
