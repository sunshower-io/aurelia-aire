import {FrameworkConfiguration} from 'aurelia-framework';
import {LogManager}             from 'aurelia-framework';
import {ConsoleAppender}        from 'aurelia-logging-console';
import {Aire}                   from "aire/core/application";

export function configureLogging(cfg : FrameworkConfiguration) {
  console.log("[aire]: Configuring Aire Logging ");
  let hash = window.location.hash,
    qidx = hash.indexOf('?');
  if(qidx >= 0) {
    const [_, level] =  readLevel(hash.substr(qidx));
    if(level) {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(levelFor(level));
      Aire.logger = LogManager.getLogger('Aire:application');
    }
  }
  console.log('[aire]: Configured Aire Logging');
}




export function readLevel(search) : [string, string] {
  return parameter(search, "log.level") as [string, string];
}

export function parameter(str : string, p : string) {
  let results = str.split(/[?&]/).map(t => {
    let current = t.split("="),
      key = current[0],
      value = current[1];
    if (key === p) {
      return [key, decodeURIComponent(value)];
    }
  }).filter(t => t);
  if(results && results.length) {
    return results[0];
  }
  return undefined;
}


export function levelFor(l: string) : number {
  let p = Object.getOwnPropertyDescriptor(LogManager.logLevel, l);
  return p.get instanceof Function ? p.get() : p.value;
}