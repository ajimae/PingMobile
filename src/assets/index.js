export const assets = {
  'back-off': require('./back-btn-off.png'),
  'next-off': require('./next-btn-off.png'),
  plus: require('./plus.png'),
  tab: require('./tab.png'),
  search: require('./search.png'),
  more: require('./more.png'),
};

export const icons = canGoBack => [
  require('./back-btn.png'),
  require('./next-btn.png'),
  canGoBack ? require('./plus.png') : require('./search.png'),
  require('./tab.png'),
  require('./more-3.png'),
];
