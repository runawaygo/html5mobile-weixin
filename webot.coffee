express = require('express')
webot = require('webot')

app = express()

webot.set('hi', "Hi, I'm Webot.")

webot.set('subscribe',
  pattern: (info)-> info.event is 'subscribe'
  handler: (info)-> 'Thank you for subscribe.'
)

app.get('/html5移动开发', (req, res, next)->
  message = req.query.message

  webot.reply(
    text: message, 
  ,(err, info)->
    return res.json({ r: err }) if err 

    res.json(
      r: 0
      reply: info.reply
    )
  )
)