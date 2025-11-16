# Proposal: Enhance Status Trigger with Automately

## 1. Summary

Automatically send a `StatusNotification` message when a new status is selected from either the charge point or the connector status dropdown in the UI.

## 2. Problem

Currently, sending a `StatusNotification` is a manual, two-step process:
1.  Select a status from a dropdown menu (`#ConnectorStatus` or `#ConnectorStatus-connector`).
2.  Click the corresponding "Send Status Notification" button (`#status` or `#status-connector`).

This process is inefficient and cumbersome, especially for testing scenarios that require sending many status updates quickly.

## 3. Proposal

To streamline this process, I will add a JavaScript `change` event listener to both status dropdowns. When the user selects a new option from either dropdown, the event listener will automatically trigger a `click` on the corresponding "Send Status Notification" button.

This change will:
-   Reuse the existing, tested logic for sending `StatusNotification` messages.
-   Provide immediate feedback to the user.
-   Make the simulator more efficient for testing status-related behaviors.

## 4. Scope

### In Scope
-   Adding `change` event listeners to the `#ConnectorStatus` and `#ConnectorStatus-connector` dropdown elements.
-   Triggering the existing `StatusNotification` send logic automatically upon status change.

### Out of Scope
-   Modifying the underlying WebSocket communication logic.
-   Changing any other OCPP message implementations.
-   Removing the existing "Send Status Notification" buttons (they will remain functional for manual use).
-   Backend or server-side changes.
