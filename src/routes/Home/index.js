export default (store) => ({
  path: '/',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./HomeView').default;
      cb(null, HomeView);

    /* Webpack named bundle   */
    }, 'home_view');
  }
});
