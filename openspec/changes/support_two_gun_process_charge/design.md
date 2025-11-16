# Design: Support Two-Gun Process Charge

The current simulator is a single-page application that simulates a single charging connector. To support two guns, we will need to make the following changes:

- **UI:** The UI will be updated to have separate controls for two connectors. This will include separate buttons for starting and stopping charging, as well as separate displays for the charging status of each connector.
- **State Management:** The application's state will be updated to track the status of two connectors independently. This will involve creating a data structure (e.g., an array of objects) to hold the state of each connector.
- **OCPP Logic:** The OCPP message handling logic will be updated to include the connector ID in relevant messages, such as `StatusNotification` and `MeterValues`. This will allow the central system to distinguish between the two connectors.
