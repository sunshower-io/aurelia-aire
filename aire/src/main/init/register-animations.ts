export function registerAnimations(cfg) {

  cfg.registerEffect("wipeIn", {
    defaultDuration : 2000,
    calls           : [
      [
        {
          backgroundColor : '#000000',
          translateX      : [0, '50%']
        }, .5
      ], [
        {
          backgroundColor : '#ffffff',
        }, .5
      ]
    ]
  });

  cfg.registerEffect("wipeOut", {
    defaultDuration : 2000,
    calls           : [
      [
        {
          backgroundColor : '#000000',
          translateX      : ['50%', 0]
        }, .5
      ]
    ]
  });
}