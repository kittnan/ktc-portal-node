module.exports = {
  apps: [
    {
      name: "ktc-portal-node",
      script: "./index.js", // your script
      watch: true,
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 4053,
        DATABASE: "mongodb://10.200.90.152:27017/ktc-portal",
      },
    },
  ],
};
