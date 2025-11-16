# Design: Fix Two-Gun Process Charge

## Problem
The existing `mvp` (Meter Values Periodically) button and its associated JavaScript logic in `simple simulator1.6.html` are designed for a single connector. When the UI was updated to support two connectors, the `mvp` functionality was not extended, leading to a single control attempting to manage periodic meter value sending for potentially two independent charging sessions. This results in incorrect behavior and prevents the independent testing and operation of two-gun charging.

## Solution
The solution involves refactoring the MeterValues periodic sending mechanism to be connector-aware. This will be achieved by:

1.  **Decoupling UI controls:** Replacing the single `mvp` button with two distinct buttons (`mvp-1` and `mvp-2`), each explicitly linked to a connector's MeterValues section.
2.  **Parameterizing JavaScript functions:** Ensuring that the `send_meterValue` function (which is called by the periodic sending logic) correctly accepts and utilizes a `connectorId` to interact with the appropriate UI elements and send the correct data.
3.  **Localizing input references:** Updating the JavaScript logic within the periodic sending handlers to dynamically reference the correct meter value input fields (e.g., `metervalue-1`, `metervalueSoC-1` for Connector 1, and `metervalue-2`, `metervalueSoC-2` for Connector 2).

## Alternatives Considered
-   **Single `mvp` button with a connector selector:** An alternative would be to keep a single `mvp` button but add a dropdown or radio buttons to select which connector it applies to. This was rejected because it adds an extra step for the user and complicates the UI for a feature that is inherently per-connector. Having two distinct buttons provides a clearer and more direct user experience for managing two independent charging sessions.

## Impact
-   **UI:** Minor changes to the MeterValues section to replace one button with two.
-   **JavaScript:** Modifications to the `$(document).ready` block to remove the old `mvp` handler and add two new ones. Updates to how meter value inputs are referenced within the periodic sending logic.
-   **OCPP Communication:** No direct changes to the OCPP message structure, as `send_meterValue` already accepts `connectorId`. The change ensures the correct `connectorId` is passed.
