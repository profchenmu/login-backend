var express = require('express');
const axios = require('axios');
const qs = require('qs');
var router = express.Router();


/* GET home page. */
router.get('/h', function (req, res, next) {
  res.render('index')
})
router.get('/login', function (req, res, next) {
  res.redirect('https://arcg.is/1OH8aS')
  // const data = {
  //   oauth_state: `qQCvEVgVCjFO0bp3cg4gW-vj3IaK0bbfLCDcNCDj6T-7e4zLzzBR5u_GRawJgIpJr0vOUQnzo3Ut3ssSTaJYufSUDuAx0grC-dlI3-PB_PCoN_H7Q81TuUHQ3cvdGi3ZR1x_DFU44lQQSxNSgSTq5wAqHNtoL3EEO1P723ch-tC81JODLTWT-TjOPgyQQ4_iVd2WbSvgI6utfnu7VVf-X1IVIFfBpN32MUKESxiVg8FlMkYthp9E2KU5lHxKob-u1j5n1wPfQ5QlWyGjPbFD5_JVWn211MUtbj3ngcsdKcmpCMtDGrMaq6TQLyHfw0f5MVOORd0MYwRD4bVQKYQjFsYKMvH1G2k1uiw1AN0XkWcxd4X0QaQDe8XkO4mNLQfXt57kg9gMVqXAYvkgtgWX7yMXS_Z8eWy-PnD7oTw3oRP26pZkXf168qHoSdfB-1pME39-FQZ4hQx9isodIRndHn4tJSg5rn6bXcwKiNlyBoKGcfjisg9nfLFuETBDbM2d`,
  //   authorize: true,
  //   username: `Dreamfuture_JLL`,
  //   password: `Achieve.Ambitions123`
  // }
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded'
  //   },
  //   data: qs.stringify(data),
  //   url: `https://jll.maps.arcgis.com/sharing/oauth2/signin`,
  // };
  // axios(options).then((e) => {
  //   const data = e.data.replace(`baseUrl: "`, `baseUrl: "https://jll.maps.arcgis.com`)
  //   console.log(data);
  //   res.send(data)
  //   // res.redirect('https://arcg.is/1OH8aS')
  // }).catch((err) => {
  //   console.log(err)
  // })


  // axios.get('https://arcg.is/1OH8aS')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     res.send(response.data);
  //     // res.render('index', {
  //     //   title: 'Express'
  //     // });
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

});


module.exports = router;