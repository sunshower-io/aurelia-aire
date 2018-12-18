import {levelFor, readLevel} from "aire/init/configure-logging";


import {LogManager}             from 'aurelia-framework';
test('configure-logging:readLevel must return correct values when present in debug', () => {
  let search = 'hello=world&log.level=debug',
    [k, v] = readLevel(search);
  expect(k).toBe('log.level');
  expect(v).toBe('debug');

});

test('levelFor must return the correct level', () => {

  expect(levelFor('debug')).toBe(LogManager.logLevel.debug);
});