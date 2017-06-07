#
# ~/.bashrc
#
BASE16_SHELL=$HOME/.config/base16-shell/
[ -n "$PS1" ] && [ -s $BASE16_SHELL/profile_helper.sh ] && eval "$($BASE16_SHELL/profile_helper.sh)"

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

 # [[ $- = *i* ]] && source ~/Build/liquidprompt/liquidprompt

# alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# eval $(dircolors -b $HOME/.dircolors)
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

eval $(thefuck --alias)


WORKON_HOME=~/.virtualenv
source /usr/bin/virtualenvwrapper.sh

# export PATH="$PATH:$HOME/bin"

export EDITOR="nvim"
export BROWSER="iceweasel"
export PATH=/usr/local/lib/cw:$PATH
alias vim="nvim"
alias nv="nvim"


alias cd..="cd .."
alias ..="cd .."
export LC_ALL="en_US.UTF-8"


alias startphp="php -S localhost:8000"

export PATH="$PATH:/usr/bin/elixir"
