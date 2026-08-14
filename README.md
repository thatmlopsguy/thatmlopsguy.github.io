# That MLOps Guy Blog

This is the repository for my personal website built with [Hugo](https://gohugo.io/), a fast static site generator written in Go.

## 🚀 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/installation/) (for local development)
- [Docker](https://docs.docker.com/get-docker/) (alternative for local development)

### Clone the Repository

```bash
git clone --recurse-submodules https://github.com/thatmlopsguy/thatmlopsguy.github.io.git
cd thatmlopsguy.github.io
```

If you've already cloned the repository without submodules, initialize them:

```bash
git submodule update --init --recursive
```

## 🛠️ Development

### Option 1: Using Hugo (Recommended)

1. Install Hugo on your system following the [official installation guide](https://gohugo.io/installation/)

2. Start the development server:

   ```bash
   hugo serve
   ```

3. Open your browser and navigate to `http://localhost:1313`

### Option 2: Using Docker

1. Set the Hugo version (optional, defaults to latest):

   ```bash
   export HUGO_VERSION=0.119.0
   ```

2. Start the development server using Docker Compose:

   ```bash
   make docs-serve
   # or
   docker compose up -d
   ```

3. Open your browser and navigate to `http://localhost:1313`

## 📁 Project Structure

```text
├── archetypes/        # Content templates
├── content/           # All content files
│   ├── posts/         # Blog posts
│   └── notes/         # Notes and quick thoughts
├── data/              # Data files (JSON, YAML, TOML)
├── layouts/           # Custom layout files
├── static/            # Static assets (images, files)
├── themes/            # Hugo themes
│   └── mlops/         # Current theme
├── docker-compose.yml # Docker development setup
├── hugo.toml          # Hugo configuration
└── Makefile           # Build commands
```

## ✍️ Creating Content

### New Blog Post

```bash
hugo new posts/my-new-post.md
```

### New Note

```bash
hugo new notes/my-new-note.md
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## 🎨 Theme

This site uses a custom theme called `mlops`.

## 📝 Available Commands

Run `make help` to see all available commands:

```bash
make help
```

## 🤝 Contributing

Feel free to open issues or submit pull requests if you find any problems or have suggestions for improvements.

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
