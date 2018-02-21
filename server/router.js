const express = require('express');
// require('./db/db_connections')();
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
      long: req.body.parkCoordinates.long
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

  router.route('/allParks').get((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.json([
      {
        parkId: 1,
        parkName: 'حديقة يهوشوا بارك حديقة هااركون',
        parkDesc:
          'حديقة حديقة يهوشوا (أو حديقة هاياركون، باسمها الأكثر دراية) هي أكبر حديقة في إسرائيل. وتغطي الحديقة 3500 هكتار، منها 1400 هكتار من المروج. في الحديقة سوف تجد العديد من عوامل الجذب والأنشطة لجميع الأعمار، مثل المزرعة الزراعية، تزافاري، الحديقة الاستوائية، الحديقة المائية ميميديون، ملاعب للأطفال، ركوب الزوارق، تأجير الدراجات والسيارات الكهربائية. في الحديقة هناك أيضا مسرح ووهل حيث يتم عرض مختلف العروض.',
        parkCoordinates: {
          lat: 32.1007717,
          lang: 34.811897300000055
        },
        rating: 3,
        tags: ['الركض', 'والدراجات', 'الحدائق'],
        picturesUrl: {
          small: [
            'http://a7.org/albums/665x1500/83987.jpg',
            'http://www.mapa.co.il/WWWTemp/UDP/6074_800_600.jpeg'
          ],
          big: 'http://www.mapa.co.il/WWWTemp/UDP/112013_800_600.jpeg',
          views: 2
        }
      },
      {
        parkId: 2,
        parkName: 'حديقة هيشت',
        parkDesc:
          'متحف هيشت في حيفا هو حديقة جديدة جميلة تواجه البحر الذي يجمع بين الترفيه والطبيعة وعلم الآثار.',
        parkCoordinates: {
          lat: 32.825254,
          lang: 34.955621000000065
        },
        rating: 3,
        tags: ['مسار الرحلة', 'محمية طبيعية', 'مجانا'],
        picturesUrl: {
          small: [
            'http://www.inature.info/w/images/thumb/f/f2/Hecht_park.jpg/320px-Hecht_park.jpg',
            'https://yaaraplayground.files.wordpress.com/2010/06/img_4510-1-copy.jpg'
          ],
          big:
            'https://www.carmeltunnels.co.il/images/upload/trips/22321166020815.jpg',
          views: 3
        }
      },
      {
        parkId: 3,
        parkName: 'نيشر بارك - نهال كاتيا',
        parkDesc:
          'السفينة نيشير يجمع بين اثنين من الجسور المعلقة فوق تيار تيار مغطاة بستان مظللة، وكهف لطيفة.',
        parkCoordinates: {
          lat: 32.76731,
          lang: 35.02477380000005
        },
        rating: 3,
        tags: ['مسار الرحلة', 'الكرمل', 'مجانا'],
        picturesUrl: {
          small: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nesher_262.jpg/250px-Nesher_262.jpg',
            'http://www.funisrael.co.il/images/stories/galile_zone/haifa_carmel/tiulim/carmel/gasher_nesher/20130720_103729.jpg'
          ],
          big:
            'http://www.inature.info/w/images/thumb/2/2f/Mishmar_hacarmel1.jpg/320px-Mishmar_hacarmel1.jpg',
          views: 4
        }
      },
      {
        parkId: 5,
        parkName: 'أشزيف، الحديقة الوطني',
        parkDesc:
          'أشزيف ناتيونال بارك - الخلجان الخلابة على ساحل الجليل، إلى جانب المباني القديمة المثيرة للإعجاب.',
        parkCoordinates: {
          lat: 32.519016,
          lang: 34.90454399999999
        },
        rating: 3,
        tags: ['شاطئ البحر', 'التحف', 'لجميع أفراد الأسرة', 'موقف سيارات'],
        picturesUrl: {
          small: [
            'https://upload.wikimedia.org/wikipedia/commons/4/47/Zeeb_beach.JPG',
            'http://zochrot.org/uploads/villageImage/9a277352e723eb7e3271db1897a3a045.jpg'
          ],
          big: 'https://i.ytimg.com/vi/3nRRcl9gs48/maxresdefault.jpg',
          views: 3
        }
      },
      {
        parkId: 6,
        parkName: 'الغربان بارك',
        parkDesc: 'رافنز بارك - حديقة النحت والقصر المهجور في شمال الجولان.',
        parkCoordinates: {
          lat: 33.1390043,
          lang: 35.73326599999996
        },
        rating: 3,
        tags: ['مجانا', 'لجميع أفراد الأسرة', 'مرتفعات الجولان'],
        picturesUrl: {
          small: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kK2vkN5TnLyL-z7gRnynnC2KLeyzyuOxYz1aeY4fOBcd_WJH',
            'https://upload.wikimedia.org/wikipedia/commons/5/58/Nahal-besor-eshkol-park.JPG'
          ],
          big: 'http://www.mapa.co.il/WWWTemp/UDP/120215_800_600.jpeg',
          views: 5
        }
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
      parkCoordinates: { lat: 100, long: 100 },
      rating: 3,
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
