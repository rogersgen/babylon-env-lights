## 0.0.2 (2016-12-09)

Features

	- Updated README: Api section
	- Normalize "image/jpg" to "image/jpeg"




## 0.0.1 (2016-02-25)

Features

	- CLI tool writes to files in place if target directory is unspecified
		- Previously was defaulting to the current working directory, which is not a typically useful use case
	- Wrote unit tests
	- Updated README


Bugs

	- Handle file-not-found errors with `console.warn()`
	- Fixed issue where directory relative to target CSS file was prepended to remote urls when no overriding arguments were passed


