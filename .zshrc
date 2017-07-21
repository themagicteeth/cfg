export TERM=xterm-256color
(wal -r &)

ttyctl -f
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
# If not running interactively, don't do anything
[[ $- != *i* ]] && return

PS1='[\u@\h \W]\$ '
export PATH="$PATH:$HOME/bin"
export PATH="$PATH:/usr/bin/elixir"
export PATH=~/.npm-global/bin:$PATH

# Better ls, icons for ls
LS_COLORS=$(ls_colors_generator)
run_ls() { ls-i --color=auto -w $(tput cols) "$@" }
run_dir() { dir-i --color=auto -w $(tput cols) "$@" }
run_vdir() { dir-i --color=auto -w $(tput cols) "$@" }
alias ls="run_ls"
alias dir="run_dir"
alias vdir="run_vdir"

alias diff='diff --color=auto'
alias df="dfc"
alias grep='grep --color=auto'
# alias curl='http'

[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh

# Config command for dotfiles
# https://developer.atlassian.com/blog/2016/02/best-way-to-store-dotfiles-git-bare-repo/
alias config="/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME"

# CD aliases
alias cd..="cd .."
alias cd.="cd .."
alias ..="cd .."
alias tarx="tar -xvf"

# Nvim instead of vim
export EDITOR="nvim"
alias vim="nvim"

alias cat="ccat"

# Start php server
alias startphp="php -S localhost:8000"

WORKON_HOME=~/.virtualenv
source /usr/bin/virtualenvwrapper.sh

export BROWSER="firefox-nightly"
export LC_ALL="en_US.UTF-8"

export PATH="$HOME/.yarn/bin:$PATH"
