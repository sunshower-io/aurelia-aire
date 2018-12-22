export function registerAnimations(cfg) {

  cfg.registerEffect("wipeIn", {
    defaultDuration : 2000,
    calls           : [
      [
        {
          backgroundColor : '#a2a2a2',
          translateX      : [0, '100%']
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
          backgroundColor : '#660066',
          translateX      : ['100%', 0]
        }, .5
      ]
    ]
  });
}