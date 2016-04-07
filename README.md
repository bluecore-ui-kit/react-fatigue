# React Fatigue

Module of modules and Makefile to reduce the amount of boilerplate when developing React components.
Based on [tj/react-fatigue-dev](https://github.com/tj/react-fatigue-dev)

## Installation

```
$ npm install bluecore-ui-kit/react-fatigue
```

## Usage

Add this module as a dev dependency, and add the following to your project's Makefile:

```Makefile
include node_modules/react-fatigue/Makefile
```

You'll now have a number of targets available, see `make help` for details. You may customize the default behaviour
by overriding the Makefile variables, view ./Makefile to see the defaults.

