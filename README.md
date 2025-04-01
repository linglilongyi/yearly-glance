English | [中文](./README-zh.md)

# Yearly Glance

Yearly event overview with customizable management.

[![GitHub stars](https://img.shields.io/github/stars/Moyf/yearly-glance?style=flat&label=Stars)](https://github.com/Moyf/yearly-glance/stargazers)
[![Total Downloads](https://img.shields.io/github/downloads/Moyf/yearly-glance/total?style=flat&label=Total%20Downloads)](https://github.com/Moyf/yearly-glance/releases)
[![GitHub License](https://img.shields.io/github/license/Moyf/yearly-glance?style=flat&label=License)](https://github.com/Moyf/yearly-glance/blob/master/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/Moyf/yearly-glance?style=flat&label=Issues)](https://github.com/Moyf/yearly-glance/issues)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/Moyf/yearly-glance?style=flat&label=Last%20Commit)](https://github.com/Moyf/yearly-glance/commits/master)

## Features

Yearly Glance is an Obsidian plugin that provides a visual overview of yearly events, helping you better plan and manage important dates throughout the year. Key features include:

- **Yearly Calendar View**: Visually displays all months of the year in one view
- **Multiple Event Types**: Support for holidays, birthdays, and custom events
- **Highly Customizable**: Multiple layout options and display styles
- **Event Reminders**: Highlight important dates
- **Interactive Interface**: Hover to view detailed information

## Usage Guide

### Basic Operations

1. **Opening Yearly Glance**:
   - Click the calendar icon in the left sidebar
   - Use the command palette (Ctrl+P) and search for "Open Yearly Glance"
   - Use keyboard shortcuts (if configured)

2. **Viewing Events**:
   - Different colors represent different types of events on the calendar
   - Hover over dates with events to see detailed information
   - The list area below the calendar displays complete information for all events

### Managing Events

1. **Adding New Events**:
   - Select "Manage Holidays", "Manage Birthdays", or "Manage Custom Events" in the command palette
   - Click the "Add" button in the modal that appears
   - Fill in the event information and save

2. **Editing Events**:
   - Open the appropriate event manager through the command palette
   - Click the "Edit" button next to the event in the list
   - Modify the information and save

3. **Deleting Events**:
   - Find the event you want to delete in the event manager
   - Click the "Delete" button

### Customization Settings

Find the "Yearly Glance" tab in Obsidian settings to adjust the following:

- **Basic Settings**:
  - Year selection
  - Custom title
  - Calendar layout (grid, list, etc.)
  - View type (month, quarter, etc.)

- **Display Options**:
  - Show/hide weekdays
  - Highlight today
  - Highlight weekends
  - Show legend
  - Limit list height
  - Event font size
  - Show tooltips
  - Colorful mode

- **Event Display**:
  - Show/hide holidays
  - Show/hide birthdays
  - Show/hide custom events
  - Monday as first day of week

## Installation
### Manual Installation

1. Download the latest release
2. Copy `main.js`, `styles.css`, and `manifest.json` to your vault's plugins folder: `<vault>/.obsidian/plugins/yearly-glance/`
3. Reload Obsidian
4. Enable the plugin in Settings → Community Plugins

### BRAT (Recommended for Beta Users)

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin
2. Click "Add Beta plugin" in BRAT settings
3. Enter `Moyf/yearly-glance`
4. Enable the plugin

## Development

- Clone this repo
- Make sure your NodeJS is at least v18 (`node --version`)
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode
- `npm run build` to build the plugin
- `npm run build:local` to build the plugin and copy it to your vault's plugins folder(need create a .env file in the project root and add the line: VAULT_PATH=/path/to/your/vault)
- `npm run version` to bump the version number and update the manifest.json, version.json, package.json
- `npm run release` to build the plugin and bump the version number

## Support

If you encounter any issues or have suggestions:
- [Open an issue](https://github.com/Moyf/yearly-glance/issues) on GitHub
- [Join the discussion](https://github.com/Moyf/yearly-glance/discussions) for questions and ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Moyf/yearly-glance&type=Timeline)](https://www.star-history.com/#Moyf/yearly-glance&Timeline)