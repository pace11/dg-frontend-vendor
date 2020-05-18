module.exports = {
  apps: [
    {
      name: 'dialoegue-vendor-web',
      script: 'npx',
      interpreter: 'none',
      args: 'serve build -s',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
