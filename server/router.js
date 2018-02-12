const express = require('express');

const routes = () => {
  let router = express.Router();

  router.route('/allParks').get((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.json([
      {
        parkId: 1,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 1,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 1,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 1,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 1,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      }
    ]);
  });

  router.route('/singlePark').get((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.json({
      parkId: 1,
      parkName: 'shahne',
      parkDesc: 'a big park',
      parkCoordinates: { lat: 100, lang: 100 },
      raiting: 3,
      wazeLink: 'fake Waze link',
      tags: ['tag1', 'tag2', 'tag3'],
      picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
    });
  });

  return router;
};

module.exports = routes;
