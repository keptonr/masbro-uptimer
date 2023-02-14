const set = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(ex) {
    if (!ex.config.TOKEN) {
      ex.logger("BOT TOKEN".bold.red)
      process.exit(1)
    }
    if (!ex.config.MONGO_DB) {
      ex.logger("MONGO DB".bold.red)
      process.exit(1)
    }
    if (!ex.config.CLIENT_ID) {
      ex.logger("BOT ID".bold.red)
      process.exit(1)
    }
    if (!set.SLASH_GLOBLE && !ex.config.SUPPORT_SERVER) {
      ex.logger("SERVER ID".bold.red)
      process.exit(1)
    }
  }
}
