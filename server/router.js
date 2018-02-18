const express = require('express');
require('./db/db_connections')();

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
        parkId: 2,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 3,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 4,
        parkName: 'shahne',
        parkDesc: 'a big park',
        parkCoordinates: { lat: 100, lang: 100 },
        raiting: 3,
        wazeLink: 'fake Waze link',
        tags: ['tag1', 'tag2', 'tag3'],
        picturesUrl: { small: ['fakeUrl', 'fakeUrl'], big: 'fakeUrl' }
      },
      {
        parkId: 5,
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
      picturesUrl: {
        small: [
          'https://thumb7.shutterstock.com/display_pic_with_logo/138841/138841,1328518865,1/stock-photo-green-city-park-94456312.jpg',
          'https://yakimaparks.com//assets/Gilbert-Open-Space_2.jpg'
        ],
        big: 'https://media.timeout.com/images/100694153/image.jpg'
      }
    });
  });

  return router;
};

module.exports = routes;
