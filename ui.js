// For the VUE UI

module.exports = (api) => {
  api.describeTask({
    match: /vue-cli-service build/,
    // eslint-disable-next-line no-unused-vars
    onBeforeRun: async ({ answers, args }) => {
      args.push('&& gulp');
    },
  });
};

