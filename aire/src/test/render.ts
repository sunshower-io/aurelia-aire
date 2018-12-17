import * as pug from 'pug';
export function render(template: string, options?:any) : string {
  return pug.compile(template.trim())(options);
}