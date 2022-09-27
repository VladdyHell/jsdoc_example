#!/usr/bin/bash

# clear
# mv ./src/images/ ./docs/images 2>/dev/null

# https://stackoverflow.com/questions/4612157/how-to-use-mv-command-to-move-files-except-those-in-a-specific-directory
# mv !(docs) ./**/images/ ./docs/images 2>/dev/null
# mv "$(ls --ignore=docs)/**/images/" ./docs/images 2>/dev/null

mv ./src/images/ ./types/images ./docs/jsdoc_example/1.0.0/ 2>/dev/null
