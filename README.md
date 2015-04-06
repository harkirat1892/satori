Satori
======

A simple Lisp interpreter written in JavaScript, with a Scheme-like syntax.

## Installation

Given that Satori is an executable program, rather than some sort of library, a
global installation is recommended.

```sh
$ sudo npm install satori -g
```

## Usage

Satori provides a REPL, as well as the ability to evaluate files.

```sh
$ satori

> (+ 1 2)
=> 3
```

```sh
$ satori test.scm

"Hello, World!"
```

## Release History

* 1.0.0 Initial release

## License

Satori is provided as-is under the two-clause BSD license.
