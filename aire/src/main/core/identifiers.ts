import { UUID } from './uuid';
import { Base58 } from './base58';

export class Identifier {
  constructor(public readonly id: string) {}
}
export namespace Identifier {
  export function isIdentifier(key: string): boolean {
    return key && /[1-9a-zA-Z]+/.test(key);
  }

  export function newId(): string {
    return Base58.encode(UUID.randomBytes());
  }
}

