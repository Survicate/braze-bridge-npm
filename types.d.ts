/**
 * Represents a rectangular area with position and dimensions.
 * Used for defining clipping regions and viewport calculations.
 */
export interface Rect {
    /** The distance from the top edge of the viewport in pixels */
    top: number;
    /** The distance from the left edge of the viewport in pixels */
    left: number;
    /** The width of the rectangle in pixels */
    width: number;
    /** The height of the rectangle in pixels */
    height: number;
}
/**
 * Message structure for survey rectangle data.
 * Sent from the survey iframe to the parent page to define clipping boundaries.
 */
export interface SurveyRectMessage {
    /** Message type identifier for rectangle data */
    type: 'sv__rect';
    /** The rectangular area defining the survey boundaries */
    payload: Rect;
}
/**
 * CSS selectors for Braze iframe elements.
 * Used to locate and interact with Braze in-app message iframes.
 */
export declare enum BrazeIframeSelector {
    /**
     * Selector for Braze in-app message iframe.
     * Targets iframes with classes 'ab-in-app-message' and 'ab-html-message'.
     */
    IN_APP_MESSAGE = "iframe.ab-in-app-message.ab-html-message"
}
/**
 * Configuration options for the Braze bridge initialization.
 * Controls the behavior and debugging capabilities of the bridge.
 */
export interface BrazeBridgeConfig {
    /**
     * Enable debug logging for troubleshooting.
     * When true, console messages will be logged for bridge operations.
     * @default false
     */
    debug?: boolean;
}
/**
 * Configuration options for the iframe clipper component.
 * Controls the clipping behavior and debugging output.
 */
export interface ClipperConfig {
    /**
     * Enable debug logging for the clipper component.
     * When true, console messages will be logged for clipping operations.
     */
    debug: boolean;
}
//# sourceMappingURL=types.d.ts.map