const connection = require('./conection');

const get_items = async() => {
    const [query] = await connection.execute('Select * from usuarioadmin');
    return query;
}

module.exports = get_items;