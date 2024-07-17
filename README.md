# yt-pants

Changes the "Videos" tab of a youtube channel into the "Pants" tab.
Runs every 500ms on every youtube page (three times on every youtube page for my system for some reason). Use it on your own risk, it may slow down older computers.

Note: This only works on English (or the videos tab is named "Videos") and if the channel has a handle set (i.e. the url is like `youtube.com/@something`)

## Usage
Add the raw file URL to `userResourcesLocation`.

Please use `https://raw.githubusercontent.com/xugro/yt-pants/3300a8c7fdb7e678b4fabc9096d0556f0f5f1a00/scriptlet.js` as the URL so any changes in the future don't affect your device. This is a security step in case someone gets access to my account and does malicious modifications to the code.

To add the raw file URL, change the line that has `userResourcesLocation unset` by default to `userResourcesLocation https://raw.githubusercontent.com/xugro/yt-pants/3300a8c7fdb7e678b4fabc9096d0556f0f5f1a00/scriptlet.js` in the advanced settings in uBlock Origin.

#### To enable it for all channels
put `youtube.com##+js(yt-pants)` into your filters

#### To enable it for a specific channel only
put `youtube.com##+js(yt-pants, PirateSoftware)` to set it to the chanel @PirateSoftware (you can change this to any channel name, just use the url of the channel not the username)
