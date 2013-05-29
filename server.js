// Generated by CoffeeScript 1.4.0
var app, express, webot;

express = require('express');

webot = require('weixin-robot');

app = express().use(express.logger());

webot.set('hi', "Hi, I'm Webot.");

webot.set('subscribe', {
  pattern: function(info) {
    return info.event === 'subscribe';
  },
  handler: function(info) {
    return 'Thank you for subscribe.';
  }
});

webot.watch(app, {
  token: 'superwolf',
  path: '/html5mobile'
});

app.listen(80);
