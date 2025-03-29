.PHONY: minify clean

# Default target
all: minify

# Minify the JavaScript file
minify:
	@echo "Minifying JavaScript..."
	npx terser js/app.js --compress --mangle --output js/app.min.js
	@echo "JavaScript minified successfully!"
	@echo "Original size: $$(wc -c < js/app.js) bytes"
	@echo "Minified size: $$(wc -c < js/app.min.js) bytes"
	@echo "Reduction: $$(echo "scale=2; (1 - $$(wc -c < js/app.min.js) / $$(wc -c < js/app.js)) * 100" | bc)%"

# Clean up minified files
clean:
	@echo "Cleaning up minified files..."
	rm -f js/app.min.js