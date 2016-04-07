BIN_DIR ?= node_modules/.bin

BUILD_FLAGS ?= --progress --colors
SERVER_FLAGS ?= -p 3000 example
WATCH_FLAGS ?= -d --progress --colors --inline --hot --config webpack.server.js

P = "\\033[34m[+]\\033[0m"

help:
	@echo
	@echo "\033[34mbuild\033[0m - build bundles"
	@echo "\033[34mwatch\033[0m - start development server"
	@echo "\033[34mlint\033[0m - run eslint over js and jsx files"
	@echo "\033[34m \033[0m" -
	@echo

build:
	@echo "  $(P) build"
	@NODE_ENV=production $(BIN_DIR)/webpack $(BUILD_FLAGS)

start:
	@$(MAKE) watch

watch:
	@echo "  $(P) watch $(WATCH_FLAGS)"
	@$(BIN_DIR)/webpack-dev-server $(WATCH_FLAGS)

lint:
	@echo "  $(P) lint"
	@$(BIN_DIR)/eslint --ignore-path .gitignore src/**

.PHONY: help start build watch
