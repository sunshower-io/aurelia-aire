import { FrameworkConfiguration } from 'aurelia-framework';
export declare function configureLogging(cfg: FrameworkConfiguration): void;
export declare function readLevel(search: any): [string, string];
export declare function parameter(str: string, p: string): string[];
export declare function levelFor(l: string): number;
