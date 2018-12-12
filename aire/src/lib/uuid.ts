import {range} from "aire/lib/lang"


export class UUID {
    public readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    static fromString(str: string): UUID {
        return new UUID(str);
    }

    static random(): string {
        return UUID.randomUUID().value;
    }

    static randomBytes(): number[] {
        let d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now();
        }

        return range(0, 32).map(t => {
            if(t == 12) {
                return 4;
            }
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return r & 0x3 | 0x8;
        })
    }

    static randomUUID(): UUID {
        let d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now();
        }
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return new UUID(uuid);
    }

    toString(): string {
        return this.value;
    }

}

