# Meter Values Periodic Sending Fix

## ADDED Requirements

### Requirement: Independent Periodic Meter Value Sending for Each Connector
The simulator SHALL allow independent initiation and control of periodic meter value sending for each charging connector.

#### Scenario: Initiate Periodic Meter Value Sending for Connector 1
Given the simulator UI is loaded
And Connector 1's Meter Values section is visible
When the "Send Meter Values Periodically" button for Connector 1 (`mvp-1`) is clicked
Then periodic `MeterValues` messages SHALL be sent for `connectorId=1`
And these messages SHALL use the meter value inputs (e.g., `metervalue-1`, `metervalueSoC-1`) associated with Connector 1.

#### Scenario: Initiate Periodic Meter Value Sending for Connector 2
Given the simulator UI is loaded
And Connector 2's Meter Values section is visible
When the "Send Meter Values Periodically" button for Connector 2 (`mvp-2`) is clicked
Then periodic `MeterValues` messages SHALL be sent for `connectorId=2`
And these messages SHALL use the meter value inputs (e.g., `metervalue-2`, `metervalueSoC-2`) associated with Connector 2.

#### Scenario: Stop Periodic Meter Value Sending for Connector 1
Given periodic meter value sending is active for Connector 1
When the "isPeriodSend-1" checkbox is unchecked
Then periodic `MeterValues` messages for `connectorId=1` SHALL cease.

#### Scenario: Stop Periodic Meter Value Sending for Connector 2
Given periodic meter value sending is active for Connector 2
When the "isPeriodSend-2" checkbox is unchecked
Then periodic `MeterValues` messages for `connectorId=2` SHALL cease.

## REMOVED Requirements

### Requirement: Single Periodic Meter Value Sending Control
The simulator SHALL NOT have a single control (`mvp` button) that attempts to manage periodic meter value sending for all connectors.
