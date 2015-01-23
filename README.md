# ng-constant demo
This is a simple test project to demostrate the usage of [gulp-ng-constant](https://github.com/guzart/gulp-ng-constant). Use this to kickstart your dynamic angular app generation.

## Usage

```
$ npm install
$ gulp
```
This will create a `./dist/config.js` based on the settings in `./config.json`.  Modify as needed.

## Advanced usage

Have your deploy process do string replacement in config.json before environment deployment/build. This example project is setup to have [Octopus Deploy](http://octopusdeploy.com) do this. However, any string replacement tool will work for this.
