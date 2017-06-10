# Prerequisites
dotfiles
base16
git
curl
wget
npm

The following was written using an Arch Linux system, so the intrsuctions
will be written using Arch tools such as pacman and using the Arch linux
directory structure.    
    
Before starting it is a good idea to update your system, so the most recent
versions of the applications will be available:

    sudo pacman -Syy

There a couple applications needed throughout the setup, install them
with the following command:

    sudo pacman -S git curl npm
    
## Select a Base-16 Colorscheme
Base 16 is a set of colorschemes that can be applied to a range of applications.
The first step is to go [here](https://chriskempson.github.io/base16/) and take
some time to choose a color scheme you like. Be sure to remember the name of it.
I chose base16-flat256. This colorscheme will be the one used throught the setup.

There are tools to create Base-16 colorschemes for applications, and there are
also repositories with premade configurations for each theme. These will be
referenced with their respective applications throughout the guide.

**Resources:**    
[Base-16 Website](http://chriskempson.com/projects/base16)    
[Base-16 Theme Previews](https://chriskempson.github.io/base16/)    
[Github - Base-16](https://github.com/chriskempson/base16)    

# Display Manager
## Xserver
X is the display manager used. In order to use X the Xserver must be installed.
Follow the instructions below to install xorg-server:

    sudo pacman -S xorg-server

**Resources:**    
[X-org website](https://www.x.org/wiki/)    
[Arch Wiki - Xorg](https://wiki.archlinux.org/index.php/xorg)    
[Official Documentation](https://www.x.org/wiki/UserDocumentation/)    

## Xinit
Xinit is installed next, this is what will start the 
xserver. Follow the instructions to install xinit:

    sudo pacman -S xorg-xinit

Once installed create a `.xinitrc` in your home directory:

    touch ~/.xinitrc

Once created add this to the top, I don't know what it does
but everyone else has it:

    if [ -d /etc/X11/xinit/xinitrc.d ] ; then
        for f in /etc/X11/xinit/xinitrc.d/?* ; do
            [ -x "$f" ] && . "$f"
        done
        unset f
    fi

To automatically start the X server on login add the following to
`~/.bash_profile` and/or `~/.zprofile`:

    if [ -z "$DISPLAY" ] && [ -n "$XDG_VTNR" ] && [ "$XDG_VTNR" -eq 1 ]; then
      exec startx
    fi

**Resources:**    
[Arch Wiki - Xinit](https://wiki.archlinux.org/index.php/Xinitrc)    

## Xresources
Xresources is what will set some user configurations for things like
colors, and certain applications. Follow the instructions below to install
Xresources:

    sudo pacman -S xorg-xrdb

A few basic settings to add to the top of the `~/.Xresources` file:

    ! Xft settings
    Xft.dpi:                    96
    Xft.antialias:              true
    Xft.rgba:                   rgb
    Xft.hinting:                true
    Xft.hintstyle:              hintslight
    
A very important command to know when working with .Xreources is how to refresh it.
Running the command below and restarting the terminal will allow you to see any changes
made to the .Xresources. Add the command to the `~/.xinitrc` file to automatically load
`.Xresources` on login:

    xrdb -load ~/.Xresources

**Resources:**    
[Arch Wiki - Xreources](https://wiki.archlinux.org/index.php/Xresources)    
[Github - Base-16 for Xresources](https://github.com/chriskempson/base16-xresources)    
[.Xresources vs .Xdefaults](https://superuser.com/questions/243914/xresources-or-xdefaults)   

## Base16-Xresources
This will generate a colorscheme for Xresources to be used by many applications
across the system. It not mandatory to use the commands found on the Github.
It may be easier to just go to [the directory](https://github.com/chriskempson/base16-xresources/tree/master/xresources)
where the color schemes are and copy paste them into .Xresources yourself. For example
the theme I used was base16-flat:

    ! Base16 Flat
    #define base00 #2C3E50
    #define base01 #34495E
    #define base02 #7F8C8D
    #define base03 #95A5A6
    #define base04 #BDC3C7
    #define base05 #e0e0e0
    #define base06 #f5f5f5
    #define base07 #ECF0F1
    #define base08 #E74C3C
    #define base09 #E67E22
    #define base0A #F1C40F
    #define base0B #2ECC71
    #define base0C #1ABC9C
    #define base0D #3498DB
    #define base0E #9B59B6
    #define base0F #be643c

    *.foreground:   base05
    #ifdef background_opacity
    *.background:   [background_opacity]base00
    #else
    *.background:   base00
    #endif
    *.cursorColor:  base05

    *.color0:       base00
    *.color1:       base08
    *.color2:       base0B
    *.color3:       base0A
    *.color4:       base0D
    *.color5:       base0E
    *.color6:       base0C
    *.color7:       base05
    *.color8:       base03
    *.color9:       base08
    *.color10:      base0B
    *.color11:      base0A
    *.color12:      base0D
    *.color13:      base0E
    *.color14:      base0C
    *.color15:      base07
    *.color16:      base09
    *.color17:      base0F
    *.color18:      base01
    *.color19:      base02
    *.color20:      base04
    *.color21:      base06

Otherwise this command may be ran to automatically put the colorscheme in .Xresources, just use
the names referenced in the directory mentioned above (base16-default-dark-256.Xresources is
used as an example):

    curl https://raw.githubusercontent.com/chriskempson/base16-xresources/master/xresources/base16-default-dark-256.Xresources >> ~/.Xresources
    xrdb -load ~/.Xresources

**Resources:**    
[Github - Base-16 for Xresources](https://github.com/chriskempson/base16-xresources)    

# Desktop Environment
## Window Manager
### i3-gaps
i3 is the window manaager used, it is a tiling window manager. The i3-gaps fork is used instead of i3.
Since I am using Arch Ian AUR package will be used to install it.
Follow the instructions:

    git clone https://aur.archlinux.org/i3-gaps.git
    cd i3-gaps
    makepkg -sri

To start i3 when the Xorg starts add the following to `.xinitrc`:

    exec i3

To view the default i3 configuration (on Arch):

    vim ~/.config/i3/config

I change the font to Roboto, but it can be changed to whatever you
would like:

    font pango:Roboto Regular 9

A couple settings that are not in the default i3 configuration will be listed below,
The first enables the scratch pad, a very useful way to access windows on any workspace.
Simply press `mod+Shift+-` to move a window to the scratchpad and then on any workspace 
press `mod+-` to show the window (and again to cycle through the windows if more than one):

    # Move window to scratchpad, show the scatchpad
    bindsym $mod+Shift+minus move scratchpad
    bindsym $mod+minus scratchpad show

There are a few settings specific to i3-gaps that will be presented below:

    # Disable and enable gaps
    bindsym $mod+p gaps inner current set 10; gaps outer current set 10;
    bindsym $mod+o gaps inner current set 0; gaps outer current set 0;

    # Set inner outer gaps
    gaps inner 0
    gaps outer 0
    
To only show borders around windows if more than one is present:
    
    # Only use borders if more than one container
    smart_borders on

It is also nice to have windows combine into a tabbed window when moving them around the
screen, to enable this as the default add the following to your config file:

    # Default layout
    workspace_layout tabbed


After making changes to the configuration file, to restart i3 without logging out use the following
keybind:

    mod+Shift+r

**Resources:**    
[i3 Documentation](https://i3wm.org/docs/)    
[Github - i3](https://github.com/i3/i3)    
[Github - i3-gaps](https://github.com/Airblader/i3)    
[Arch Wiki - i3](https://wiki.archlinux.org/index.php/i3)    
[AUR - i3-gaps](https://aur.archlinux.org/packages/i3-gaps/)    

### Use .Xresources for i3 Colorscheme
Once the colorscheme is set up in `~/.Xresources` it is handy to set i3
to use the same ones, so that when it is updated i3 will also be updated. In
order to do this add the following to `~/.config/i3/config`:

    set_from_resource $base00 color0  #000000
    set_from_resource $base01 color18 #000000
    set_from_resource $base02 color19 #000000
    set_from_resource $base03 color8  #000000
    set_from_resource $base04 color20 #000000
    set_from_resource $base05 color7  #000000
    set_from_resource $base06 color21 #000000
    set_from_resource $base07 color15 #000000
    set_from_resource $base08 color9  #000000
    set_from_resource $base09 color16 #000000
    set_from_resource $base0A color3  #000000
    set_from_resource $base0B color10 #000000
    set_from_resource $base0C color6  #000000
    set_from_resource $base0D color4  #000000
    set_from_resource $base0E color13 #000000
    set_from_resource $base0F color17 #000000

Now i3 will use the colors from `.Xresources`, provided that the variables
are used when defining the colors of UI elements. Such as the following:

    # Property Name         Border  | BG Text | Indicator | Child | Border
    client.focused          $base0D   $base0D   $base00    $base0D  $base0D
    client.focused_inactive $base01   $base01   $base05    $base03  $base01
    client.unfocused        $base01   $base00   $base05    $base01  $base01
    client.urgent           $base08   $base08   $base00    $base08  $base08
    client.placeholder      $base00   $base00   $base05    $base00  $base00
    client.background       $base07

Note that I first created a theme using i3 builder then replaced the hex colors
that they had and put the newly created variables matching them in their place.
So when changing the `.Xresource` colors i3 should be restyled to match them without
having to change anything. These variables can also be used in other places throughout
the i3 config file.

**Resources**:    
[Reddit - You Can Now use Xresources in i3](https://www.reddit.com/r/unixporn/comments/4if9xc/i3_you_can_now_use_x_resources_in_i3/)    
[Github - Using i3 config with Xresources](https://github.com/Airblader/dotfiles-manjaro/blob/master/.i3/config)    

## Status Bar
### Polybar
    git clone https://aur.archlinux.org/polybar-git.git
    cd polybar-git
    makepkg -sri
    
    

### i3blocks
Extensible via shell scripts. Adds a lot of functionality to
the default i3 status bar. Install with the following command:

    sudo pacman -S i3blocks
 
 Refer to the [i3blocks.conf example](https://github.com/vivien/i3blocks/blob/master/i3blocks.conf)
 on the Github for an example configuration. To quickly get a bar setup follow the directions below. 
 We first need to install font-awesome for the icons:
 
    sudo pacman -S ttf-font-awesome

Then we can create the config file:

    touch /.config/i3/i3blocks.conf
    vim ~/.config/i3/i3blocks.conf

Once the file is open for editing paste the following within:


    
 
**Resources:**  
[Github - i3blocks](https://github.com/vivien/i3blocks)
[Github - i3blocks.conf example](https://github.com/vivien/i3blocks/blob/master/i3blocks.conf)  

### Polybar
    

## Compositing
### Compton
Compton is a standalone composite manager. It adds things like shadows to
windows.

    sudo pacman -S compton

To automatically start compton on the start of i3, add the following to
`~/.config/i3/config` (the i3 configuration file):

    exec --no-startup-id compton

**Resources:**    
[Arch Wiki - Compton](https://wiki.archlinux.org/index.php/Compton)    
[Github - Compton](https://github.com/chjj/compton)    

## Application Menu
### Rofi
Rofi is a simple utility that starts programs by allowing you to search for them. It is
a drop in replacement for dmenu, and is very customizable. To install rofi follow the

    sudo pacman -S rofi

To enable use of Rofi with i3 add the following to the i3 config (`~/.config/i3/config`),
it will set `mod+d` to be used to launch Rofi:

    bindsym $mod+d exec rofi -show run

It is best to add the configuration options to the `~/.Xresources` file, a few useful settings
are below, and a comprehensive list may be found [here](https://gist.github.com/PrimordialHelios/f6184fe7868835ad65d3).     
    
To make fullscreen with a fake background of your desktop (fake transparency):

    rofi.fullscreen: true
    rofi.fake-transparency: true
    rofi.fake-background: screenshot

Set the font (I use Roboto):

    rofi.font: Roboto Light 15

Set the line-height and number of results:

    rofi.lines: 3
    rofi.eh: 2

Adjust the border width and the padding, good for centering the menu:

    rofi.bw: 100
    rofi.padding: 100 100

And finally set a colorscheme. There are a few options for this, you may use
[Base-16 Builder](https://github.com/base16-builder/base16-builder) the official
[Theme Generator](https://davedavenport.github.io/rofi/p11-Generator.html), or you can
create your own on sites such as [Terminal.sexy](https://terminal.sexy/), you can
even use the colors used when setting the base 16 colorscheme. The argb values below set
transparency, you can also use plain hex color codes.

    rofi.color-enabled: true
    rofi.color-window: argb:d12c3e50, argb:0e74c3c, argb:02c3e50
    rofi.color-normal: argb:02c3e50, #e0e0e0, argb:02c3e50, argb:d79b59b6, #e0e0e0
    rofi.color-active: argb:02c3e50, #3498db, argb:4a2c3e50, argb:d13498db, #e0e0e0
    rofi.color-urgent: argb:02c3e50, #e74c3c, argb:5f2c3e50, argb:cce74c3c, #e0e0e0

**Resources:**    
[Arch Wiki - Rofi](https://wiki.archlinux.org/index.php/Rofi)    
[Rofi Theme Generator](https://davedavenport.github.io/rofi/p11-Generator.html)    
[Rofi Themes Github](https://github.com/DaveDavenport/rofi-themes)    
[Rofi Website](https://github.com/DaveDavenport/rofi)    
[Rofi Config Options](https://gist.github.com/PrimordialHelios/f6184fe7868835ad65d3)    
[Terminal.sexy](https://terminal.sexy/)    

## Notifications
### Dunst
Dunst is a notification daemon like what is seen on most distros. It is very lighweitght 
and customizable. To install dunst follow the instructions:

    sudo pacman -S dunst

I use base16 builder to make the dunst colorscheme. Follow the instructions to
create one:

    base16-builder -s default -t dunst -b dark > dunst

Once complete open up the `dunst` file that was created and copy the contents
to `~/.config/dunst/dunstrc`, which is the dunst config file.   
    
To automatically start dunst on the start of i3, add the following to the
i3 configuration file, `~/.config/i3/config`:

    exec --no-startup-id dunst &

**Resources:**    
[Dunst Website](http://knopwob.org/dunst/index.html)    
[Arch Wiki - Dunst](https://wiki.archlinux.org/index.php/Dunst)    
[Github - Base-16 Dunst](https://github.com/khamer/base16-dunst)    

## Theming
### Base16-Builder
Base-16 Builder is an npm package that will automatically make colorschemes for
many common applications (including Dunst, i3, Rofi, Xresources, etc.). To use
it follow the command below, it must first be installed:

    sudo npm install --global base16-builder

Once it is installed it can be used to create configurations, here is an example for
Dunst:

    base16-builder -s default -t dunst -b dark > dunst

`-s` is for the theme to install, `-t` is the program, `-b` is the base color (light
or dark). Once done copy the contents of the file to the respective config, for dunst it
is `.config/dunst/dunstrc`

**Resources:**    
[Github - Base-16 Builder](https://github.com/base16-builder/base16-builder)    

# Console
## Shell
### ZSH
ZSH is an alternative shell to bash. It is installed through pacman:

    sudo pacman -S zsh

This installs the shell, there are a couple nice features that are in seperate
packages (also installed through pacman):

    sudo pacman -S zsh-completions zsh-syntax-highlighting

To set zsh as the default shell first list all available shells:

    chsh -l

Then change the default to the path of zsh:

    sudo chsh -s /usr/bin/zsh

**Resources**:    
[Arch Wiki - ZSH](https://wiki.archlinux.org/index.php/zsh)    
[Users Guide to Z-Shell](http://zsh.sourceforge.net/Guide/zshguide02.html)    
[Changing Your Default Shell](https://wiki.archlinux.org/index.php/Command-line_shell#Changing_your_default_shell)    

## Terminal
### URxvt
URxvt is an extremely customizable and lightweight terminal. In order for certain
unicode glyphs to display properly a patched version must be installed. Follow the
instructions below to install:

    git clone https://aur.archlinux.org/rxvt-unicode-cvs-patched-wideglyphs.git
    cd rxvt-unicode-cvs-patched-wideglyphs
    makepkg -sri

URxvt uses the .Xresources file for much of the customization. Below are a few
suggested tweaks to add:

**Resources:**    
[AUR rxvt Patched](https://wiki.archlinux.org/index.php/Color_output_in_console)    
[Arch Wiki - rxvt-unicode](https://wiki.archlinux.org/index.php/rxvt-unicode)    
[URxvt Xresource Options](http://pod.tst.eu/http://cvs.schmorp.de/rxvt-unicode/doc/rxvt.1.pod#RESOURCES)

### URxvt - Tabbedex
Tabbedex is a Perl script that adds some nice additions to the tabbing functionality
of urxvt. To install follow the directions:    

    git clone https://aur.archlinux.org/packages/urxvt-tabbedex-mina86-git/
    cd urxvt-tabbedex-mina86-git
    makepkg -sri

There are a few options to be configured for tabbedex. Open `~/.Xresources` and
add the following lines:

    URxvt.perl-ext-common:      default,matcher,tabbedex
    URxvt.tabbed.new-button:    yes
    URxvt.tabbed.autohide:      yes
    URxvt.tabbed.tabbar-fg:     14
    URxvt.tabbed.tabbar-bg:     0
    URxvt.tabbed.tab-fg:        14
    URxvt.tabbed.tab-bg:        0
    URxvt.tabbed.title:         no

**Resources:**    
[rxvt-unicode](https://software.schmorp.de/pkg/rxvt-unicode.html)    
[rxvt-unicode FAQs](http://pod.tst.eu/http://cvs.schmorp.de/rxvt-unicode/doc/rxvt.7.pod)    
[Using and Customizing URxvt](http://www.askapache.com/linux/rxvt-xresources/)    
[AUR - urxvt tabbedex mina86 git](https://aur.archlinux.org/packages/urxvt-tabbedex-mina86-git/)    
[Github - urxvt Tabbedex](https://github.com/mina86/urxvt-tabbedex)    

## Terminal Utilities
## Tmux
Tmux is a terminal multiplexer. It allows for split panes and multiple terminal sessions. To
install tmux use pacman:

    sudo pacman -S tmux

## Terminal Colorscheme
### Base-16-Shell
To make it easy to change the terminals colorscheme between all of the different
base-16 themes, Base-16 Shell is used. To install, follow the instructions:

    git clone https://github.com/chriskempson/base16-shell.git ~/.config/base16-shell

Now that the repository is cloned and setup in the config folder, it is time add a few lines
to the .bashrc so that it can be used from the command line. Place the following in
your `~/.bashrc` and/or `~/.zshrc`:

    BASE16_SHELL=$HOME/.config/base16-shell/
    [ -n "$PS1" ] && [ -s $BASE16_SHELL/profile_helper.sh ] && eval "$($BASE16_SHELL/profile_helper.sh)"

To change the theme and to view all available ones enter the following command,
followed by tab (tab completion) to see the choices and to select a new theme:

    base16

Your terminal should change colors. This makes it very easy to test the different
themes and to switch to new ones quickly. To test the colors there is a built in
testing utility:

    cd ~/.config/base16-shell/
    ./colortest

This will print out the colors associated with a profile.

**Resources:**    
[Github - Base-16 Shell](https://github.com/chriskempson/base16-shell)    

### Other Color Tweaks
There a few other tweaks that are available to add more flair to the terminal.
The first is adding a bit of color to pacman. We need to modify the `pacman.conf`:

    vim /etc/pacman.conf

Uncomment the following line (under `Misc options`):

    Color
    
**Resources:**    
[Arch Wiki - Color Output in Console](https://wiki.archlinux.org/index.php/Color_output_in_console)    

## Terminal Font
### Nerd Fonts
In order for certain unicode symbold to appear in the terminal a patched font
is required. Nerd fonts has a wide variety of patched fonts to choose from. To
install them perform the following commands. I will be installing Source Code Pro from
the AUR, you may also download from the Github linked in the references:

    git clone https://aur.archlinux.org/nerd-fonts-source-code-pro.git
    cd nerd-fonts-source-code-pro
    makepkg -sri

Once the font is downloaded, URxvt must be configured to use it, add the following to
the `~/.Xresources` file:

    URxvt*font: xft:SauceCodePro Nerd Font:style=Regular

To add more fonts simply add a `, \\` to the end of the line and add the next font below
(I added DejaVu):

    URxvt*font: xft:SauceCodePro Nerd Font:style=Regular, \
                xft:DejaVu Sans Mono:style=Book:antialias=false:size=12

It may be helpful to list available fonts on the system, to do this enter the following and
press tab to see the available options:

    fc-list

**Resources:**:    
[Github - Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)    
[AUR - Nerd Fonts Source Code Pro](https://aur.archlinux.org/nerd-fonts-source-code-pro.git)    

# GTK Theme
## Set GTK Colors
Using base-16-builder (which was installed earlier) we can create GTK themes for
the selected colorscheme. Enter the following to create the colorscheme for GTK2: 

    base16-builder -s flat -b dark -t gtk-2 >> ~/.gtkrc-2.0
 
Followed by this command for GTK3:

    base16-builder -s flat -b dark -t gtk-3 >> ~/.config/gtk-3.0/gtk.css
 
Note thet `>>` appends and `>` will overwrite, most likely it is best to use `>>`.

**Resources:**
[Make GTK Match Base16 Flat](https://www.reddit.com/r/unixporn/comments/4lp6fn/matching_gtk_theme_for_base16flat_theme/d3p2e8p/)    
[Base16-Builder GTK Templates](https://github.com/base16-builder/base16-builder/commit/d54bb949e1d3a48fcf6a9ac772f7ca2f29e30e09)    
[Base16-Builder](https://github.com/base16-builder/base16-builder)    

## Lxappearance
Lxappearance is a simple lightweight way to configure GTK themes, icons and a few other settings.
To install use pacman:

    sudo pacman -S lxappearance
    
Once installed it can be ran with the `lxappearance` command. No themes or icons have been installed yet
so you can't do much yet, but we will install some next.

**Resources:**
[LXDE Wiki - lxappearance](https://wiki.lxde.org/en/LXAppearance)
[Arch Wiki - GTK Configuration Tools](https://wiki.archlinux.org/index.php/GTK%2B#Configuration_tools)

## Papirus Icons
Papirus is a Material Design icon them forked from the Paper Icons theme. It has pretty
complete coverage of most applications. To install enter the following in the terminal
(to install into the root directory):

    git clone https://aur.archlinux.org/papirus-icon-theme-git.git
    cd papirus-icon-theme-git
    makepkg -sri

**Resources:**    
[Github - Papirus Icon Theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme)   
[AUR - Papirus Icon Theme](https://aur.archlinux.org/packages/papirus-icon-theme-git/)    


# TODO
## Feh   
## Nitrogen   
## Maim  
## ImageMagick  
## nm-applet
## Vim/Neovim


# Even Better ls
Even-better-ls is an awesome enahncement to the terminal that adds colors and
icons for file extensions. It requires a patched font to be installed from [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)
and that your terminals font is set to use it. To get this awesomeness run the following command:

    sh -c "$(curl -fsSL https://raw.githubusercontent.com/illinoisjackson/even-better-ls/master/install.sh)"

This will build for a while. Once it is done append the following to the
`~/.bashrc` or `~/.zshrc`:

    LS_COLORS=$(ls_colors_generator)

    run_ls() {
        ls-i --color=auto -w $(tput cols) "$@"
    }

    run_dir() {
        dir-i --color=auto -w $(tput cols) "$@"
    }

    run_vdir() {
        vdir-i --color=auto -w $(tput cols) "$@"
    }
    alias ls="run_ls"
    alias dir="run_dir"
    alias vdir="run_vdir"

To refresh the current terminal without restarting enter the following:

    source ~/.bashrc

Now go into any directory and `ls` and there should be awesome folder and icons.
If this does not work there is another way to try. A `.dircolors` file
must be created using the script that is used by the program:

    ls_colors_generator > ~/.dircolors

Once that is generated change the

**Resources:**    
[Github - Even Better ls](https://github.com/illinoisjackson/even-better-ls)    
[Github - Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)    
