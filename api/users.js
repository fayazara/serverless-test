const axios = require('axios')

module.exports = async (req, res) => {
    const { name = 'World' } = req.query;
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    const x = {
        name,
        data
    }
    res.status(200).send(x);
}