const exportFileName = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

module.exports = require(`./configureStore.${exportFileName}`)
