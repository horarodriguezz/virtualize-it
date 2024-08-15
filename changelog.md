# Changelog

## [1.1.1] - 08-15-2024

### Bug Fixes

- [`71aaa1f`](https://github.com/horarodriguezz/virtualize-it/commit/71aaa1f6a58f4920b784c1c0c031aa6cc32031b6) It was not possible to pass custom components as children to the library components, only native JSX elements were allowed.
- [`c8dd05b`](https://github.com/horarodriguezz/virtualize-it/commit/c8dd05b96a26a980e8acda2a699bb3868a7f0ef8)
  - totalColumns was not being used.
  - totalColumns and columnWidth are now optional: if they are not present, the VirtualizedGrid works like a FixedList
  - There is not more necessary to pass a two level array map as children, if only one level is present (rows), then the `VirtualizedGrid` works as a `FixedList`

### Chores

- [`2d936cb`](https://github.com/horarodriguezz/virtualize-it/commit/2d936cb94e47707621718f0d80193e5d4341e99d) modified .gitIgnore
- [`2b97b7`](https://github.com/horarodriguezz/virtualize-it/commit/2b97b7115b2b5a0d50e76c63d612afb8811649ff) abstracted container and wrapper styles
- [`4af490`](https://github.com/horarodriguezz/virtualize-it/commit/4af49019457b4c465945fe7b006e3045e7e572d5) added changelog.md
