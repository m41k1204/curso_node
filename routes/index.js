const express = require('express');
const router = express.Router();

const messages = [
  { text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  { text: 'Hello World!', 
    user: 'Charles', 
    added: new Date()
  }
]

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index', {title: 'Mini Messageboard', messages: messages });
})

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  const message1 = req.body.input1;
  const message2 = req.body.input2;

  messages.push({text: message1, user: message2, added: new Date() })

res.redirect('/')

})




module.exports = router;
