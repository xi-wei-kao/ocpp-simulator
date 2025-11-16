# Proposal: Fix Two-Gun Process Charge

## Summary
This proposal addresses issues identified during the testing of the `support_two_gun_process_charge` implementation, specifically regarding the MeterValues periodic sending functionality for multiple connectors. The current implementation has a single "Send Meter Values Periodically" button (`mvp`) that does not correctly handle multiple connectors, leading to unexpected behavior when attempting to send meter values for `connectorId=2`.

## Motivation
The previous implementation aimed to enable two-gun charging, but the MeterValues periodic sending mechanism was overlooked for multi-connector support. This fix is crucial to ensure that both connectors can independently send meter values periodically, which is a core requirement for a functional two-gun charging simulator.

## Proposed Changes
1.  **Remove the single `mvp` button:** The existing "Send Meter Values Periodically" button will be removed from the UI.
2.  **Add `mvp-1` and `mvp-2` buttons:** Two new buttons, `mvp-1` and `mvp-2`, will be added to the UI, one for each connector's MeterValues section.
3.  **Update JavaScript handlers:** The JavaScript code will be updated to include click handlers for `mvp-1` and `mvp-2`. These handlers will correctly trigger the periodic sending of meter values for their respective connectors, utilizing the `send_meterValue(connectorId)` function.
4.  **Ensure correct element referencing:** All associated meter value inputs (e.g., `metervalue`, `metervalueSoC`, `meterValuesInterval`) within the periodic sending logic will be updated to correctly reference the `-1` or `-2` suffixed IDs based on the `connectorId`.

## Acceptance Criteria
-   There are two distinct "Send Meter Values Periodically" buttons in the UI, one for each connector.
-   Clicking `mvp-1` initiates periodic meter value sending for Connector 1.
-   Clicking `mvp-2` initiates periodic meter value sending for Connector 2.
-   Each periodic sending process correctly uses the meter value inputs associated with its respective connector.
-   No errors are observed in the browser console when using the periodic meter value sending for either connector.
