# tone-analyzer
This is a demo chrome extension for analyzing message tone(slack for now) before sending a message out. It use Google Natural Language API and displays positive/neutral/negative to user

## Trying it out
1. Download the code, e.g. `git clone https://github.com/megaurav2002/tone-analyzer`
2. Get a Google Natural Language API key and update in Content.js 
2. Navigate chrome to `chrome://extensions`
3. Check the `Developer mode` toggle
4. Click on `Load Unpacked Extension...`
5. Select the folder containing the extension

## Planned Improvements (Pull requests welcome :) )
1. Instead of hitting a button to check sentiment, it would be nice if a smiley rain showing sentiment happens when user enters a message and pauses for a second or so
2. Getting it to run with different messaging apps should be trivial, you will just need to add target DOM element in Content.js

