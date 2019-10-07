/*
To Do
	- Test remote css file
	- Change local images so they don't match remote tests
*/
var test = require('tape')
,app = require('../')


test('single file - local - asset prefix assumed',function(t){
	t.plan(6);

	app('./test/lib.css', function(err,res){
		t.ok(res.indexOf('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') != -1,
			'pre-existing encoded image');
		t.ok(res.indexOf('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkAQAAAADcH0/XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAASSURBVCjPY/gPAgyj5ChJVRIAypHyHLPbLnsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMTAtMTZUMDg6NDE6MTUtMDQ6MDBVOcWMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTEwLTE2VDA4OjQxOjE1LTA0OjAwJGR9MAAAAABJRU5ErkJggg==') != -1,
			'double quotes');
		t.ok(res.indexOf('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkEAAAAAAy19n/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0T//xSrMc0AAABaSURBVBjTY3h8jYFOaAPDo/cMj/QYHuYyPGhjuF/BcC+L4W4swx0NhltfGG7uZ7jRzXA9nOGaEsOV4wyXdzJcamW4WM5wYQLD+SaGcwcZzt5iOOvAcObMACIAsZae6pVZewYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMTAtMTZUMDg6NDE6MTUtMDQ6MDBVOcWMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTEwLTE2VDA4OjQxOjE1LTA0OjAwJGR9MAAAAABJRU5ErkJggg==') != -1,
			'single quotes');
		t.ok(res.indexOf('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQEAAAAAAao4lEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0T//xSrMc0AAABISURBVDjLY3j6n2EUjSKqo1u3GG57MdxxY7gby3BvIsP9PwwPMxgefWB4Us7w9DHDcz+GF/MYXl5ieHWW4XUpw+uJo2gUEYMAvlejJVIWsXwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMTAtMTZUMDg6NDE6MTUtMDQ6MDBVOcWMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTEwLTE2VDA4OjQxOjE1LTA0OjAwJGR9MAAAAABJRU5ErkJggg==') != -1,
			'no quotes');
		t.ok(res.indexOf('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQEAIAAACwqkHPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0T///////8JWPfcAAAAjUlEQVRIx+3PIQoCQRSA4X+eYhBsg4iwowZBGDF7COtWq1kwad37eAPBg3iFFXaL4xvB4hVEw0tf+NNPvummOQsAGIZhGN8G1ZTqmtx99u5e8ARKYciMrTBi7nZCQeQkFCzdUZiwoiJfNDTx08gPPbRTcWMW7HlFvbZJ8ARXCgM8a0Ho0P+LacMwjB/yBjxhJFOI7HkuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTEwLTE2VDA4OjQxOjE1LTA0OjAwVTnFjAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMC0xNlQwODo0MToxNS0wNDowMCRkfTAAAAAASUVORK5CYII=') != -1,
			'remote image file (@todo: move this file to owned CI environment)');
		t.ok(res.indexOf('/ui/1.11.2/themes/smoothness/images/ui-bg_glass_65_ffffff_1x400.png') != -1,
			'leave missing files alone');
	})
});

test('single file - local - remote asset prefix supplied',function(t){
	t.plan(1);

	app('./test/lib.css', 'http://code.jquery.com/ui/1.11.2/themes/smoothness/', function(err,res){
		t.ok(res.indexOf('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') != -1,
			'worky');
	})
});

