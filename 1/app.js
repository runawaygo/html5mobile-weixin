var port = process.env.APP_PORT;

var express = require('express');
var webot = require('weixin-robot');

var app = express().use(express.logger());

webot.set('hi', "Hi, I'm Webot.");

webot.set('subscribe',{
  pattern: function(info){ return info.event === 'subscribe'},
  handler: function(info){return 'Thank you for subscribe.'}
});

webot.watch(app, { token:'superwolf', path: 'html5移动开发' });
app.listen(port);

/* Enjoy it! */
