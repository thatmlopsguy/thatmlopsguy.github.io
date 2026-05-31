# AM8 Hugo Theme

A modern, dark-themed Hugo theme designed for DevOps/MLOps consultants and technical portfolios.

## Features

- Dark, professional design with smooth transitions
- Responsive layout with mobile navigation
- Homepage sections: Hero, Portfolio, Services, Blog, CTA
- Clean single post and list page templates
- CSS-only (no build tools required)
- Configurable via `hugo.toml` params

## Installation

Copy or clone this theme into your Hugo site's `themes/` directory:

```bash
cd your-hugo-site
git clone https://github.com/thatmlopsguy/am8.git themes/am8
```

Then set the theme in your `hugo.toml`:

```toml
theme = "am8"
```

## Configuration

Here's an example `hugo.toml` configuration:

```toml
baseURL = "https://example.com/"
languageCode = "en"
title = "Your Site"
theme = "am8"

[params]
  description = "Your tagline here"
  author = "Your Name"
  contact_url = "/contact/"
  footer_cta_text = "Ready to work together?"

  [params.social]
    github = "yourusername"
    linkedin = "yourusername"
    email = "you@example.com"

  [params.hero]
    title = "Your Headline"
    subtitle = "A compelling subtitle."
    author = "Your Name"
    [params.hero.cta_primary]
      text = "View My Work"
      url = "/work/"
    [params.hero.cta_secondary]
      text = "Get in Touch"
      url = "/contact/"
    [[params.hero.stats]]
      value = "10+"
      label = "Years Experience"

  [params.cta]
    title = "Ready to get started?"
    subtitle = "Let's discuss how I can help."
    email = "you@example.com"
    [params.cta.primary]
      text = "Start a Conversation"
      url = "/contact/"

[menus]
  [[menus.main]]
    name = "Work"
    url = "/work/"
    weight = 1
  [[menus.main]]
    name = "Services"
    url = "/services/"
    weight = 2
  [[menus.main]]
    name = "About"
    url = "/about/"
    weight = 3
  [[menus.main]]
    name = "Blog"
    url = "/posts/"
    weight = 4
  [[menus.main]]
    name = "Contact"
    url = "/contact/"
    weight = 5
```

## Sections

### Hero

Configured via `[params.hero]` — supports title, subtitle, CTAs, and stats counters.

### Portfolio

Configured via `[params.portfolio]` — showcases featured projects with cards, tags, and trusted-by logos.

### Services

Configured via `[params.services]` — grid of service cards with feature lists.

### Blog

Automatically pulls the latest 3 posts from `content/posts/`.

### CTA

Configured via `[params.cta]` — call-to-action section with email link.

## License

MIT
