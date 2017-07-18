#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Sean McGlothlin'
AUTHOR_URL = 'pages/about.html'
SITENAME = AUTHOR
SITESUBTITLE = 'Programmer | Musician | Car&nbsp;Enthusiast'
SITEURL = 'https://seanmcglothlin.com'

PAGE_URL = '{slug}'

PATH = 'content'
THEME = 'themes/tartan'
STATIC_PATHS = ['images', 'extra/robots.txt', 'extra/favicon.ico', 'pages', 'code', 'music', 'cars']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'}
}

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
DISPLAY_PAGES_ON_MENU = True

#Menu
MENUITEMS = (('Home', '/index.html'),
             ('About', '/pages/about.html'),
             ('Code', '/pages/code.html'),
             ('Music', '/pages/music.html'),
             ('Cars', '/pages/cars.html'),
            )

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

