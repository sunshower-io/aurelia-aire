import { AireTab } from "aire/tabs/tab";
export declare class AireTabPanel {
    private panel;
    private element;
    private container;
    private children;
    private activeTab;
    private cid;
    attached(): void;
    readonly active: AireTab;
    private beforeShow;
}
