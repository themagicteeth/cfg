(wal -r &)

ttyctl -f

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

PS1='[\u@\h \W]\$ '

export PATH="$PATH:$HOME/bin"
export PATH=~/.npm-global/bin:$PATH
export TERM=xterm-256color
export LC_ALL="en_US.UTF-8"

# Virtual environment wrapper
WORKON_HOME=~/.virtualenv
source /usr/bin/virtualenvwrapper.sh

# Better ls, icons for ls
LS_COLORS=$(ls_colors_generator)
run_ls() { ls-i --color=auto -w $(tput cols) "$@" }
run_dir() { dir-i --color=auto -w $(tput cols) "$@" }
run_vdir() { dir-i --color=auto -w $(tput cols) "$@" }
alias ls="run_ls"
alias dir="run_dir"
alias vdir="run_vdir"

# Alias to color cat output
alias cat="ccat"

# Alias for colored grep
alias grep='grep --color=auto'

# Grc color console output
[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh

# Dotfiles
# https://developer.atlassian.com/blog/2016/02/best-way-to-store-dotfiles-git-bare-repo/
alias config="/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME"

# Shortcuts
alias cd..="cd .."
alias cd.="cd .."
alias ..="cd .."
alias tarx="tar -xvf"

# Set editor
export EDITOR="nvim"
alias vim="nvim"

# Set browser
export BROWSER="firefox-nightly"

