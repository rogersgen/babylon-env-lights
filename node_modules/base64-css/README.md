# base64-css
Replace image refs with base64 encoding in css files
<br /><br />Ex: Localize a library so you aren't reliant on external uptime

#### Before
```css
.ui-menu .ui-menu-item {
	list-style-image: url("images/ui-bg_flat_75_ffffff_40x100.png");
}
```

#### After
```css
.ui-menu .ui-menu-item {
	list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkAQAAAADcH0/XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAASSURBVCjPY/gPAgyj5ChJVRIAypHyHLPbLnsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMTAtMTZUMDg6NDE6MTUtMDQ6MDBVOcWMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTEwLTE2VDA4OjQxOjE1LTA0OjAwJGR9MAAAAABJRU5ErkJggg==");
}
```


## Run via JS
```js
var baser = require('base64-css')

baser('./libs/dulce-ui/dui.css', function(err,res){
	if (!err)
		// do something with parsed css
})
```


## Run via CLI
```bash
# parse local file, writing to target in place:
node bin/cli.js -f ./test/lib.css

# parse local file, saving result in specified directory:
node bin/cli.js -f ./test/lib.css ./assets/

# parse local file, passing remote location prefix for assets:
node bin/cli.js -f ./test/lib.css -p http://code.jquery.com/ui/1.11.2/themes/smoothness

# parse remote file, saving result in specified directory:
node bin/cli.js -f http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css ./assets/
```


## Api
Images that cannot be located are logged to console.warn and skipped

### baser( filePath[, assetPrefix], callback )

`filePath` Path of CSS file to be parsed; can be local or an http(s) url

`assetPrefix` (optional) Directory to use as base when locating images; can be local or an http(s) url; if omitted, normal CSS rules are followed

`callback` Format `(err,parsedSource)`, which can be passed to `fs.writeFile`

### node bin/cli.js -f file_path [-p asset_prefix] [target_directory]

`-f file_path` Path of CSS file to be parsed

`-p asset_prefix` (optional) Asset prefix override

`target_directory` (optional) Directory in which to save result; if omitted, source file is updated in place



## To Do
- Accept directory as input, as opposed to just a single css file
	- Run against all css files in dir


