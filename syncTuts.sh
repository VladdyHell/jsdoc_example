#!/usr/bin/bash

while inotifywait -r -e modify,create,delete,move /home/$USER/Notes/YouTube/Documenting\ Your\ JavaScript\ JSDoc\ Crash\ Course/; do
  rsync -avz /home/$USER/Notes/YouTube/Documenting\ Your\ JavaScript\ JSDoc\ Crash\ Course/ /home/crimsonvirtuoso/Documents/Programming/YouTubers/Traversy\ Media/jsdoc_example/tutorials/
done