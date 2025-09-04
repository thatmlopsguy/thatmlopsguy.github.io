.PHONY: help
.DEFAULT_GOAL := help

SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c

##@ General
help: ## Show this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage: \033[36m\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Development
pre-commit: ## Run pre-commit hooks
	@uvx prek run -a

##@ Documentation
docs-serve: ## Start a local web server for serving documentation
	@docker compose up -d
