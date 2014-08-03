# Mechanica Boilerplate [![Build Status][travis-image]][travis-url]

Basic template for building modern web application.

## Prerequisites

While I tried to make it as much automatic as possible, several things need to be in place before we'll be able to proceed:

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](http://www.vagrantup.com/downloads.html)

Usage
-----
Spin up dev environment

    $ vagrant up
    $ vagrant ssh

and then, on VM

    $ cd /vagrant
    $ npm install
    $ gulp watch

[travis-url]: https://travis-ci.org/mechanica/boilerplate
[travis-image]: https://travis-ci.org/mechanica/boilerplate.svg
