# Tasks: Fix Two-Gun Process Charge

- [x] **UI:** Remove existing `mvp` button.
- [x] **UI:** Add `mvp-1` button to Connector 1 MeterValues section.
- [x] **UI:** Add `mvp-2` button to Connector 2 MeterValues section.
- [x] **JavaScript:** Implement click handler for `mvp-1` to trigger periodic meter value sending for Connector 1.
- [x] **JavaScript:** Implement click handler for `mvp-2` to trigger periodic meter value sending for Connector 2.
- [x] **JavaScript:** Ensure all meter value inputs within the periodic sending logic correctly reference the `-1` or `-2` suffixed IDs.
- [ ] **Testing:** Manually verify that periodic meter value sending works independently for both connectors.