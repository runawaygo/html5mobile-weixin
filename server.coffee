express = require('express')
webot = require('weixin-robot')

app = express()

webot.set('hi', "Hi, I'm Webot.")

webot.set('subscribe',
  pattern: (info)-> info.event is 'subscribe'
  handler: (info)-> 'Thank you for subscribe.'
)

webot.watch(app, { token: 'html5移动开发' });

app.listen(80);