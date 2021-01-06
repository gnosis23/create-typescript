const removeManifest = () => config => {
  config.plugins = config.plugins.filter(
    p => p.constructor.name !== "ManifestPlugin"
  );
  return config;
};

module.exports = function override(config, env) {
  config = removeManifest()(config);
  return config;
}
