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
  components: any[];
  description: string;


  constructor(readonly client: HttpClient) {

  }


  async attached() {
    let descriptor = JSON.parse(help as string);
    if(descriptor) {
      this.title = descriptor.title;
      this.description = descriptor.description;
      this.components = descriptor.components;
      for (let component of this.components) {
        let overview = component.directories.find((dir) => {
              return dir.directory == "overview";
            }),
            index = component.directories.indexOf(overview);

        if (index > 0) {
          component.directories.splice(index, 1);
          component.directories.unshift(overview);
        }
      }
      console.log('this.components', this.components);
    }
  }

  urlFor(hfile: string, directory: any, component:any) {
    return `/dist/${component.name}/help/en/${directory.directory}/${hfile}`
  }

  normalizeTitle(text : string) {
      return text.split('-').map((word) => {
          return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ')
  };
}