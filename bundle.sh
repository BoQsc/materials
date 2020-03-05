#!/bin/bash

echo Running mergejs in $(pwd)
mkdir -p assets/bundled/
bash mergejs -c build/jsfilelist.txt assets/bundled/dist.js
echo mergejs run

