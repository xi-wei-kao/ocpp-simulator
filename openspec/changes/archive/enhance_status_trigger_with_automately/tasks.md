# Tasks: Enhance Status Trigger with Automately

1.  [x] **Analysis:** Identify the IDs of the status dropdowns (`#ConnectorStatus`, `#ConnectorStatus-connector`) and the corresponding send buttons (`#status`, `#status-connector`) in `simple simulator1.6.html`. (Completed)
2.  [x] **Implementation:** In `simple simulator1.6.html`, add a jQuery `change` event listener to the charge point status dropdown (`#ConnectorStatus`). The listener should trigger a `click` on the `#status` button.
3.  [x] **Implementation:** In `simple simulator1.6.html`, add a jQuery `change` event listener to the connector status dropdown (`#ConnectorStatus-connector`). The listener should trigger a `click` on the `#status-connector` button.
4.  [x] **Testing:** Manually test the implementation by:
    -   Opening the `simple simulator1.6.html` file in a browser.
    -   Connecting to a WebSocket server.
    -   Changing the value of the "Connector Status(充電樁狀態)" dropdown and verifying a `StatusNotification` is sent.
    -   Changing the value of the "Connector Status(充電槍狀態)" dropdown and verifying a `StatusNotification` is sent.
