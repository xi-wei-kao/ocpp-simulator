## ADDED Requirements

### Requirement: Two-Gun Charging
The charge point SHALL support charging two EVs simultaneously.

#### Scenario: Charge two EVs at the same time
- **Given** a charge point with two connectors
- **When** EV 1 is connected to connector 1 and starts charging
- **And** EV 2 is connected to connector 2 and starts charging
- **Then** both EVs should charge simultaneously
- **And** the charge point should send separate `StatusNotification` and `MeterValues` messages for each connector
