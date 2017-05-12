export default (store) => ({
  path: '/(:pageNo)',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./HomeView').default;
      cb(null, HomeView);

    /* Webpack named bundle   */
    }, 'home_view');
  }
});
