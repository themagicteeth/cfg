# Base 16 colorscheme
BASE16_SHELL=$HOME/.config/base16-shell/
[ -n "$PS1" ] && [ -s $BASE16_SHELL/profile_helper.sh ] && eval "$($BASE16_SHELL/profile_helper.sh)"

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

export PATH="$PATH:$HOME/bin"
export PATH="$PATH:/usr/bin/elixir"

# Better ls, icons for ls
LS_COLORS=$(ls_colors_generator)

run_ls() {
    ls-i --color=auto -w $(tput cols) "$@"
}

run_dir() {
    dir-i --color=auto -w $(tput cols) "$@"
}

run_vdir() {
    dir-i --color=auto -w $(tput cols) "$@"
}
alias ls="run_ls"
alias dir="run_dir"
alias vdir="run_vdir"

# Config command for dotfiles
# https://developer.atlassian.com/blog/2016/02/best-way-to-store-dotfiles-git-bare-repo/
alias config="/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME"

# CD aliases
alias cd..="cd .."
alias ..="cd .."

# Nvim instead of vim
export EDITOR="nvim"
alias nv="nvim"
alias vim="nvim"

# Start php server
alias startphp="php -S localhost:8000"

eval $(thefuck --alias)

WORKON_HOME=~/.virtualenv
source /usr/bin/virtualenvwrapper.sh

export BROWSER="iceweasel"
export LC_ALL="en_US.UTF-8"




