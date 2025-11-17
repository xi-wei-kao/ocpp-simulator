# Spec Delta: Automatic Status Trigger

## MODIFIED Requirements

### The user interface SHOULD automatically send status notifications.

#### Scenario: Charge Point Status Change
- **Given** the simulator is connected to a central system,
- **When** the user selects a new status (e.g., "Unavailable") from the "Connector Status(充電樁狀態)" dropdown,
- **Then** the simulator MUST immediately send a `StatusNotification` message for connector ID 0 with the selected status.

#### Scenario: Connector Status Change
- **Given** the simulator is connected to a central system,
- **When** the user selects a new status (e.g., "Charging") from the "Connector Status(充電槍狀態)" dropdown,
- **Then** the simulator MUST immediately send a `StatusNotification` message for the corresponding connector ID (e.g., 1) with the selected status.
