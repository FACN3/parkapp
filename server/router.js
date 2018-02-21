const express = require('express');
const db_connections = require('./db/db_connections');

const routes = (app, Park) => {
  db_connections();
  //GET ALL PARKS
  app.get('/api/parks', (req, res) => {
    Park.find((err, Parks) => {
      if (err) return res.status(500).send({ error: 'database failure' });
      res.json(Parks);
    });
  });
  //GET PARK BY ID
  app.get('/api/parks/:park_id', (req, res) => {
    Park.findById(req.params.park_id, (err, Park) => {
      if (err) return res.status(500).json({ error: err });
      if (!Park) return res.status(404).json({ error: 'Park not found' });
      res.json(Park);
    });
  });
  //GET PARK BY PARKNAME
  app.get('/api/parks/parkName/:parkName', (req, res) => {
    Park.find({ parkName: req.params.parkName }, (err, Park) => {
      if (err) return res.status(500).json({ error: err });
      if (!Park) return res.status(404).json({ error: 'Park not found' });
      res.json(Park);
    });
  });
  //GET PARK BY CITY
  app.get('/api/parks/city/:city', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    Park.find({ city: req.params.city }, (err, Park) => {
      if (err) return res.status(500).json({ error: err });
      if (!Park) return res.status(404).json({ error: 'Park not found' });
      res.json(Park);
    });
  });
  //CREATE PARK
  app.post('/api/parks', (req, res) => {
    const park = new Park();
    park.parkName = req.body.parkName;
    park.parkDesc = req.body.parkDesc;
    park.parkCoordinates = {
      lat: req.body.parkCoordinates.lat,
      lng: req.body.parkCoordinates.lng
    };
    park.rating = req.body.rating;
    park.views = req.body.views;
    park.city = req.body.city;
    park.tags = req.body.tags;
    park.picturesUrl = {
      small: [req.body.picturesUrl.small[0], req.body.picturesUrl.small[1]],
      big: req.body.picturesUrl.big
    };

    park.save(err => {
      if (err) {
        console.log('this is error!', err);
        res.status(500).json({ result: 0 });
        return;
      }
      res.json({ result: 1 });
    });
  });
  //UPDATE THE PARK
  app.put('/api/parks/:park_id', (req, res) => {
    Park.update(
      { _id: req.params.park_id },
      { $set: req.body },
      (err, output) => {
        if (err) res.status(500).json({ error: 'database failure' });
        console.log(output);
        if (!output.n) return res.status(404).json({ error: 'park not found' });
        res.json({ message: 'park updated' });
      }
    );
  });
  //DELETE PARK
  app.delete('/api/parks/:park_id', (req, res) => {
    Park.remove({ _id: req.params.park_id }, (err, output) => {
      if (err) return res.status(500).json({ error: 'database failure' });
      res.status(204).end();
    });
  });

  let router = express.Router();
  return router;
};

module.exports = routes;
