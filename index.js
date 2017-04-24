export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: [ 'plugins/kibana-viz-clock/clock' ]
    },

    init(server, options) {
      // Must be empty
    }
  });
};
