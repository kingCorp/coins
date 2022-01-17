import ApiHandler from '../apiHandler';

export default {
  test: () => ApiHandler.get(`ping`),
};
