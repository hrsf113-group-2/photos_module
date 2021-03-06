const database = require('../database/connection.js');
const Photo = require('../model/photos.js');

module.exports = {
  photos: {
    get: (req, res) => {
      database.query('USE photo')
        .then(() => Photo.findAll({ where: { roomid: req.params.roomid } }))
        .then((result) => {
          res.set('Access-Control-Allow-Origin', '*');
          res.send({ photos: result });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).end();
        });
    },
  },
};
