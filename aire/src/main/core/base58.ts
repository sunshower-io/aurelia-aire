function divmod(
  number: number[],
  firstDigit: number,
  base: number,
  divisor: number
) {
  let remainder = 0;
  for (let i = firstDigit; i < number.length; i++) {
    let digit = number[i] & 0xff,
      temp = remainder * base + digit;
    number[i] = temp / divisor;
    remainder = temp % divisor;
  }
  return remainder;
}

export namespace Base58 {
  const CHARS: string =
    '123456789ABCDEFGHJKLMNPQRSTU' + 'VWXYZabcdefghijkmnopqrstuvwxyz';

  const ZERO = CHARS[0];

  const INDEXES = [];

  function initialize(): void {
    for (let i = 0; i < 128; i++) {
      INDEXES[i] = -1;
    }
    for (let i = 0; i < CHARS.length; i++) {
      INDEXES[CHARS[i]] = i;
    }
  }

  export function encode(value: number[]): string {
    if (!value) {
      return '';
    }

    let zeros = 0;
    while (zeros < value.length && value[zeros] === 0) {
      ++zeros;
    }
    let input = value.slice(),
      encoded = [],
      outputStart = input.length * 2;

    for (let inputStart = zeros; inputStart < input.length; ) {
      encoded[--outputStart] = CHARS[divmod(input, inputStart, 256, 58)];
      if (input[inputStart] == 0) {
        ++inputStart;
      }
    }

    while (outputStart < encoded.length && encoded[outputStart] == ZERO) {
      ++outputStart;
    }
    while (--zeros >= 0) {
      encoded[--outputStart] = ZERO;
    }
    return encoded.slice(outputStart, encoded.length - outputStart).join('');
  }

  initialize();
}
