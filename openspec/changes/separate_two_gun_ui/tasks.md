# Tasks: Separate Two-Gun UI

- [x] **UI:** Review and ensure all Connector 1 specific controls (Authorize, Start Transaction, Stop Transaction, Status Notification, Meter Values inputs/buttons) are visually grouped and clearly labeled.
- [x] **UI:** Review and ensure all Connector 2 specific controls (Authorize, Start Transaction, Stop Transaction, Status Notification, Meter Values inputs/buttons) are visually grouped and clearly labeled.
- [x] **UI:** Add clear visual separators (e.g., `<hr>`, distinct `div` containers) to delineate the sections for Connector 1 and Connector 2.
- [x] **HTML:** Verify and update HTML element IDs for all connector-specific interactive elements and display areas to be unique and consistently suffixed (e.g., `id="start-1"`, `id="start-2"`).
- [x] **JavaScript:** Update JavaScript code to reflect any changes in HTML element IDs, ensuring correct functionality for all connector-specific actions.
- [ ] **Testing:** Manually verify that all controls for Connector 1 and Connector 2 function independently and correctly.
- [ ] **Testing:** Verify that automated scripts can reliably target and interact with controls for each connector.