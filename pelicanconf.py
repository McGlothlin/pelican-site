#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals


AUTHOR = 'Sean McGlothlin'
SITENAME = AUTHOR
SITESUBTITLE = 'Developer, Musician, Car&nbsp;Enthusiast'
SITEURL = 'https://seanmcglothlin.com'


ARTICLE_URL = '{slug}'
ARTICLE_SAVE_AS = '{slug}/index.html'
# Feed generation is usually not desired when developing
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
AUTHOR_URL = 'pages/about.html'

CATEGORY_FEED_ATOM = None

DEFAULT_DATE_FORMAT = '%A, %B %d %Y'
DEFAULT_LANG = 'en'
DEFAULT_PAGINATION = 10
DIRECT_TEMPLATES = ['index']
DISPLAY_PAGES_ON_MENU = True

EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'}
}

FEED_ALL_ATOM = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

#Menu
MENUITEMS = (('Home', '/'),
             ('Blog', '/blog'),
             ('About', '/about'),
            )

PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'
PATH = 'content'
PLUGINS = ['pelican_alias', 'pelican_youtube']

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)
STATIC_PATHS = ['images', 'extra/robots.txt', 'extra/favicon.ico', 'pages', 'code', 'music', 'cars']
SYNTAX_THEME='monokai'

THEME = 'themes/tartan'
TIMEZONE = 'America/Los_Angeles'
TRANSLATION_FEED_ATOM = None
