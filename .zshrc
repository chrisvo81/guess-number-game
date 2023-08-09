autoload -U add-zsh-hook

load-node-version() {
  if type n > /dev/null 2>&1; then
    local node_version_desired=$(cat .nvmrc 2>/dev/null)
    if [ -n "$node_version_desired" ]; then
      n "$node_version_desired"
    fi
  elif type nvm > /dev/null 2>&1; then
    local node_version="$(nvm version)"
    local nvmrc_path="$(nvm_find_nvmrc)"

    if [ -n "$nvmrc_path" ]; then
      local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

      if [ "$nvmrc_node_version" = "N/A" ]; then
        nvm install
      elif [ "$nvmrc_node_version" != "$node_version" ]; then
        nvm use
      fi
    elif [ "$node_version" != "$(nvm version default)" ]; then
      echo "Reverting to nvm default version"
      nvm use default
    fi
  else
    echo "Neither n nor nvm found."
  fi
}

add-zsh-hook chpwd load-node-version
load-node-version
