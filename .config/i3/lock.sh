#!/bin/bash
# https://www.reddit.com/r/unixporn/comments/3358vu/i3lock_unixpornworthy_lock_screen/
scrot /tmp/screen.png
convert /tmp/screen.png -scale 10% -scale 1000% /tmp/screen.png
 
if [[ -f $HOME/.config/i3/lock.png ]]
then
  convert /tmp/screen.png $HOME/.config/i3/lock.png -gravity center -composite -matte  /tmp/screen.png
fi
i3lock -e -u -n -i /tmp/screen.png
