import { boot } from 'quasar/wrappers';
import { makeServer } from 'src/server';

export default boot(() => {
  if (process.env.NODE_ENV) {
    makeServer();
  }
});
