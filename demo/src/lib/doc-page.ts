import {
  viewResources,
  inject
} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import * as help from './help.json!text';

@viewResources('./html-panel')
@inject(HttpClient)
export class DocPage {

  title: string;
  components: any;
  description: string;


  constructor(readonly client: HttpClient) {

  }


  async attached() {
    let descriptor = JSON.parse(help as string);
    if(descriptor) {
      this.title = descriptor.title;
      this.description = descriptor.description;
      this.components = descriptor.components;
    }
  }

  filename(s:string) : string {
    return s.substring(0, s.lastIndexOf('.'));
  }


  urlFor(hfile: string, directory: any, component:any) {
    return `/dist/${component.name}/help/en/${directory.directory}/${this.filename(hfile)}.md`
  }
}