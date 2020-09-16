#!/bin/bash

echo Running mergejs in $(pwd)
mkdir -p assets/bundled/
bash mergejs -c build/jsfilelist.txt assets/bundled/dist.js
echo mergejs run

rm assets/bundled/dist.css || true
for i in $(cat build/cssfilelist.txt); do
    echo CSS $i;
    cat $i >> assets/bundled/dist.css
done
