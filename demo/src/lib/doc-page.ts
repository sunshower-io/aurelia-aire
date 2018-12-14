import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import * as help from './help.json!text';

@inject(HttpClient)
export class DocPage {

  title: string;
  components: any;
  description: string;


  constructor(readonly client: HttpClient) {

  }

  urlFor(hfile: string, directory: any, component:any) {
    let s = `/dist/${component.name}/help/en/${directory.directory}/${this.filename(hfile)}.html`
    console.log(s);
    return s;

    //           let a = await client.fetch(`/dist/${this.name}/help/en/${dir.directory}/${this.filename(h)}.html`)
  }

  async attached() {
    let descriptor = JSON.parse(help as string),
      client = this.client;
    if(descriptor) {
      this.title = descriptor.title;
      this.description = descriptor.description;
      this.components = descriptor.components;
    }

    // if(descriptors && descriptors.length) {
    //   this.name = descriptors[0].name;
    //   for(let d of descriptors) {
    //     let dirs = d.directories;
    //     if(dirs) {
    //       for(let dir of dirs) {
    //         let help = dir.help;
    //         for(let h of help) {
    //           let a = await client.fetch(`/dist/${this.name}/help/en/${dir.directory}/${this.filename(h)}.html`)
    //           console.log(a);
    //         }
    //       }
    //     }
    //   }
    // }
  }

  filename(s:string) : string {
    return s.substring(0, s.lastIndexOf('.'));
  }
}