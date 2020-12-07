import bunyan from 'bunyan'

var logger = bunyan.createLogger({
  name: 'server',
  streams: [
    {
      level: 'info',
      type: 'rotating-file',
      path: './api/logs/server.log',
      period: '1d', // daily rotation
      count: 20 // keep 3 back copies
    },
    {
      level: 'info',
      stream: process.stdout // log INFO and above to stdout
    }
  ]
})

export default logger
