export interface Rect {
    top: number;
    left: number;
    width: number;
    height: number;
}
export interface SurveyRectMessage {
    type: 'sv__rect';
    payload: Rect;
}
export declare enum BrazeIframeSelector {
    IN_APP_MESSAGE = "iframe.ab-in-app-message.ab-html-message"
}
export interface BrazeBridgeConfig {
    debug?: boolean;
}
export interface ClipperConfig {
    debug: boolean;
}
//# sourceMappingURL=types.d.ts.map