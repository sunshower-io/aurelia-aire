import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import * as help from './help.json!text';

@inject(HttpClient)
export class DocPage {

  name: string;
  descriptor: any;

  constructor(readonly client: HttpClient) {

  }

  async attached() {
    let descriptors = JSON.parse(help as string),
      client = this.client;
    if(descriptors && descriptors.length) {
      this.name = descriptors[0].name;
      for(let d of descriptors) {
        let dirs = d.directories;
        if(dirs) {
          for(let dir of dirs) {
            let help = dir.help;
            for(let h of help) {
              let a = await client.fetch(`./aire-demo/${this.name}/en/${dir.directory}/${this.filename(h)}.html!text`)
              console.log(a);
            }
          }
        }
      }
    }
  }

  filename(s:string) : string {
    return s.substring(0, s.lastIndexOf('.'));
  }
}