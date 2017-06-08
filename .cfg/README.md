Prerequisites
==================================================================
The following was written using an Arch Linux system, so the intrsuctions
will be written using Arch tools such as pacman and using the Arch linux
directory structure.    
    
Before starting it is a good idea to update your system, so the most recent
versions of the applications will be available:

    sudo pacman -Syy

There a couple applications needed throughout the setup, install them
with the following command:

    sudo pacman -S git curl npm

Xorg
==================================================================
X is the display manager used. In order to use X the Xserver must be installed.
Follow the instructions below to install xorg-server:

    sudo pacman -S xorg-server

**Resources:**    
[X-org website](https://www.x.org/wiki/)    
[Arch Wiki - Xorg](https://wiki.archlinux.org/index.php/xorg)    
[Official Documentation](https://www.x.org/wiki/UserDocumentation/)    


Xinit
------------------------------------------------------------------
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

**Resources:**    
[Arch Wiki - Xinit](https://wiki.archlinux.org/index.php/Xinitrc)    

Xrdb (Xresources)
-------------------------------------------------------------------
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

i3 / i3-gaps
=====================================================================
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

    # Only use borders if more than one container
    smart_borders on

It is also nice to have windows combine into a tabbed window when moving them around the
screen, to enable this as the default add the following to your config file:

    # Default layout
    workspace_layout tabbed


After making changes to the configuration file, to restart i3 without logging out use the following
keybind:

    mod+Shift+c

**Resources:**    
[i3 Documentation](https://i3wm.org/docs/)    
[Github - i3](https://github.com/i3/i3)    
[Github - i3-gaps](https://github.com/Airblader/i3)    
[Arch Wiki - i3](https://wiki.archlinux.org/index.php/i3)    
[AUR - i3-gaps](https://aur.archlinux.org/packages/i3-gaps/)    

i3blocks
-----------------------------------------------------------------------------
Extensible via shell scripts. Adds a lot of functionality to
the default i3 status bar. Install with the following command:

    sudo pacman -S i3blocks

i3-style (optional)
-----------------------------------------------------------------------------
i3-style is used to easily change the colorscheme of i3 to one of
the included colorschemes. To use it npm must first be installed.
To install i3-style follow the instructions:

    npm install i3-style -g

To use it and actually change the colorscheme of i3 (solarized is used as an example):

    cp ~/.i3/config ~/.i3/config.backup
    i3-style solarized -o ~/.i3/config
    i3-msg restart

If you want to create a theme from your current i3 theme
that can be used with i3-style run the following and then move
the output to the themes directory:

    i3-style --to-theme ~/.i3/config -o my-theme.yaml

**Resources:**    
[i3-style Website](https://dubstepdish.com/blog/2013/11/06/introducing-i3-style/)    
[Github - i3-style](https://github.com/acrisci/i3-style)    
[Github - Base-16 for i3](https://github.com/khamer/base16-i3)    

Base-16
==============================================================================
Base 16 is a set of colorschemes that can be applied to a range of applications.
The first step is to go [here](https://chriskempson.github.io/base16/) and take
some time to choose a color scheme you like. Be sure to remember the name of it.

There are tools to create Base-16 colorschemes for applications, and there are
also repositories with premade configurations for each theme. These will be
references with their respective applications throughout the guide.

**Resources:**    
[Base-16 Website](http://chriskempson.com/projects/base16)    
[Base-16 Theme Previews](https://chriskempson.github.io/base16/)    
[Github - Base-16](https://github.com/chriskempson/base16)    
[Github - Base-16 Builder](https://github.com/base16-builder/base16-builder)    

Base-16 Shell
----------------------------------------------------------------------------
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

Base-16 for Xresources
-----------------------------------------------------------------------------
This will generate a colorscheme for Xresources to be used by many applications
across the system. It not mandatory to use the commands found on the Github.
It may be easier to just go to [the directory](https://github.com/chriskempson/base16-xresources/tree/master/xresources)
where the color schemes are and copy paste them into .Xresources yourself.

Otherwise this command may be ran to automatically put the colorscheme in .Xresources, just use
the names referenced in the directory mentioned above (base16-default-dark-256.Xresources is
used as an example):

    curl https://raw.githubusercontent.com/chriskempson/base16-xresources/master/xresources/base16-default-dark-256.Xresources >> ~/.Xresources
    xrdb -load ~/.Xresources

**Resources:**    
[Github - Base-16 for Xresources](https://github.com/chriskempson/base16-xresources)    


Base-16 Builder (optional)
--------------------------------------------------------------------------
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

Rofi
========================================================================
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

Compton
=========================================================================
Compton is a standalone composite manager. It adds things like shadows to
windows.

    sudo pacman -S compton

**Resources:**    
[Arch Wiki - Compton](https://wiki.archlinux.org/index.php/Compton)    
[Github - Compton](https://github.com/chjj/compton)    


Dunst
==========================================================================
Dunst is a notification daemon like what is seen on most distros. It is very lighweitght 
and customizable. To install dunst follow the instructions:

    sudo pacman -S dunst

**Resources:**    
[Dunst Website](http://knopwob.org/dunst/index.html)    
[Arch Wiki - Dunst](https://wiki.archlinux.org/index.php/Dunst)    
[Github - Base-16 Dunst](https://github.com/khamer/base16-dunst)    

URxvt
==========================================================================
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

Tabbedex
---------------------------------------------------------------------------
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

Nerd Fonts
==========================================================================
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

Even Better ls
==========================================================================
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

ZSH
===========================================================================
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

Oh My ZSH
--------------------------------------------------------------------------
Oh my ZSH is a set of plugins and enhancements to the ZSH shell. To install
run the curl command:

    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

To uninstall run:

    uninstall_oh_my_zsh

**Resources:**    
[Oh-My-Zsh Website](http://ohmyz.sh/)    
[Github - Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh)    
[Plugin Directory](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins)    
[Themes Screenshots](https://github.com/robbyrussell/oh-my-zsh/wiki/themes)    

Terminal Colors
===========================================================================
There a few other tweaks that are available to add more flair to the terminal.
The first is adding a bit of color to pacman. We need to modify the `pacman.conf`:

    vim /etc/pacman.conf

Uncomment the following line (under `Misc options`):

    Color

**Resources:**    
[Arch Wiki - Color Output in Console](https://wiki.archlinux.org/index.php/Color_output_in_console)    

terminal colors
================
https://wiki.archlinux.org/index.php/Bash/Prompt_customization    
https://terminal.sexy/    

