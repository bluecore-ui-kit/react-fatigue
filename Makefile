BIN_DIR ?= node_modules/.bin

BUILD_FLAGS ?= --progress --colors
SERVER_FLAGS ?= -p 3000 example
WATCH_FLAGS ?= -d --progress --colors --inline --hot --config webpack.server.js
ESLINT_FLAGS ?= --ignore-path .gitignore src/**
JEST_FLAGS ?= --config=.jestrc --maxWorkers=4

P = "\\033[34m[+]\\033[0m"

help:
	@echo
	@echo "\033[34mbuild\033[0m - build bundles"
	@echo "\033[34mwatch\033[0m - start development server"
	@echo "\033[34mlint\033[0m - run eslint over js and jsx files"
	@echo "\033[34mtest\033[0m - run jest tests"
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
	@$(BIN_DIR)/eslint $(ESLINT_FLAGS)

test:
	@echo "  $(P) run jest tests"
	@$(BIN_DIR)/jest $(JEST_FLAGS)

.PHONY: help start build watch
