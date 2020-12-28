
exports.up = function (knex) {
  return knex.schema.createTable('admin', table => {
    table.increments('id')
    table.string('name')
    table.string('hash')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('admin')
}
