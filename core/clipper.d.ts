import type { ClipperConfig } from '../types';
/**
 * Braze IAM Clipper - runs on parent page, applies clip-path to iframe
 */
export declare class BrazeIframeClipper {
    private config;
    private iframe;
    private lastRect;
    private mutationObserver;
    private isInitialized;
    constructor(config: ClipperConfig);
    init(): void;
    private runWhenDocumentReady;
    private setupMutationObserver;
    private findIframe;
    private handleMessage;
    private parseRect;
    private validateRect;
    private applyClipping;
    private handleResize;
    destroy(): void;
}
//# sourceMappingURL=clipper.d.ts.map