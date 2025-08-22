# @survicate/braze-bridge-npm

A JavaScript bridge that enables the integration between Braze In-App Messages (IAM) and Survicate surveys by handling iframe clipping and positioning.

## Overview

This package provides a solution for displaying Survicate surveys within Braze In-App Message iframes. It automatically detects Braze IAM iframes and applies dynamic clipping to ensure proper survey display and positioning.

## Features

- **Automatic iframe detection**: Finds Braze IAM iframes using CSS selectors
- **Dynamic clipping**: Applies `clip-path` CSS properties to iframes based on survey positioning
- **Message handling**: Listens for positioning messages from Survicate surveys
- **Responsive support**: Handles window resize events to maintain proper clipping
- **Debug mode**: Optional debug logging for development and troubleshooting
- **Cleanup**: Proper resource cleanup and event listener removal

## Installation

```bash
npm install @survicate/braze-bridge-npm
```

## Usage

### Basic Setup

```javascript
import { initBrazeBridge, destroyBrazeBridge } from '@survicate/braze-bridge-npm';

// Initialize the bridge
initBrazeBridge();

// Clean up when done
destroyBrazeBridge();
```

### With Debug Mode

```javascript
import { initBrazeBridge } from '@survicate/braze-bridge-npm';

// Initialize with debug logging enabled
initBrazeBridge({
  debug: true
});
```

### TypeScript Support

```typescript
import { initBrazeBridge, destroyBrazeBridge, BrazeBridgeConfig } from '@survicate/braze-bridge-npm';

const config: BrazeBridgeConfig = {
  debug: false
};

initBrazeBridge(config);
```

## How It Works

1. **Initialization**: The bridge sets up event listeners for window messages and resize events
2. **Iframe Detection**: Uses a MutationObserver to detect when Braze IAM iframes are added to the DOM
3. **Message Handling**: Listens for `sv__rect` messages from Survicate surveys containing positioning data
4. **Clipping Application**: Applies CSS `clip-path` properties to the iframe based on the received positioning data
5. **Responsive Updates**: Re-applies clipping when the window is resized

## API Reference

### Functions

#### `initBrazeBridge(config?: BrazeBridgeConfig): void`

Initializes the Braze bridge with optional configuration.

**Parameters:**
- `config` (optional): Configuration object
  - `debug?: boolean` - Enable debug logging (default: `false`)

#### `destroyBrazeBridge(): void`

Cleans up the bridge, removes event listeners, and resets iframe styles.

### Types

#### `BrazeBridgeConfig`

```typescript
interface BrazeBridgeConfig {
  debug?: boolean;
}
```

## License

MIT © Survicate
