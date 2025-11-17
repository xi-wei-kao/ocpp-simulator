## ADDED Requirements

### Requirement: Clear Visual Separation of Connector Controls
The simulator UI MUST clearly and visually separate the controls and status indicators for each charging connector.
#### Scenario: User views the simulator UI
Given the simulator UI is loaded
Then there shall be distinct visual groupings for Connector 1 controls and Connector 2 controls
And each grouping shall be clearly labeled (e.g., "Connector 1 Controls", "Connector 2 Controls")

### Requirement: Unique and Consistent HTML Element IDs
All interactive HTML elements and display areas related to a specific connector MUST have unique and consistently suffixed IDs to facilitate programmatic access.
#### Scenario: Developer inspects UI elements
Given the simulator UI is loaded
When a developer inspects interactive elements related to Connector 1 (e.g., Start, Stop, Authorize buttons, Meter Value inputs)
Then each element shall have a unique HTML ID ending with "-1" (e.g., `id="start-1"`, `id="metervalue-1"`)
When a developer inspects interactive elements related to Connector 2
Then each element shall have a unique HTML ID ending with "-2" (e.g., `id="start-2"`, `id="metervalue-2"`)

### Requirement: Independent Operation of Connector Controls
Controls for each connector MUST operate independently, allowing for separate management of charging sessions without affecting other connectors.
#### Scenario: Automated script interacts with Connector 1
Given Connector 1 is in an "Available" state
When an automated script triggers the "Start Transaction" button for Connector 1
Then Connector 1 shall initiate a transaction
And Connector 2's state shall remain unchanged
#### Scenario: Automated script interacts with Connector 2
Given Connector 2 is in an "Available" state
When an automated script triggers the "Start Transaction" button for Connector 2
Then Connector 2 shall initiate a transaction
And Connector 1's state shall remain unchanged
