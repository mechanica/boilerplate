# Mechanica Boilerplate [![Build Status][travis-image]][travis-url]

Basic template for building modern web application.

## Prerequisites

While I tried to make it as much automatic as possible, several things need to be in place before we'll be able to proceed:

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](http://www.vagrantup.com/downloads.html)

## Usage

Spin up dev environment

    $ vagrant up
    $ vagrant ssh

and then, on VM

    $ cd /vagrant
    $ npm install
    $ gulp watch

## Troubleshooting
On Windows host, you may (and likely will) experience problems with `npm` that are related to [Maximum Path Length Limitations of Windows API](http://msdn.microsoft.com/en-us/library/aa365247%28VS.85%29.aspx#maxpath). To work around that issue you would need to enable symbolic link evaluations by executing the command in admin command prompt on the windows host ([details](http://stackoverflow.com/questions/229643/how-do-i-overcome-the-the-symbolic-link-cannot-be-followed-because-its-type-is)).

    > fsutil behavior set SymlinkEvaluation L2L:1 R2R:1 L2R:1 R2L:1


[travis-url]: https://travis-ci.org/mechanica/boilerplate
[travis-image]: https://travis-ci.org/mechanica/boilerplate.svg
