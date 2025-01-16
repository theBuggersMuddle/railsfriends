# Pin npm packages by running ./bin/importmap

pin "application" # Main JavaScript entry point
pin "@hotwired/turbo-rails", to: "turbo.min.js" # Turbo for enhanced navigation
pin "@hotwired/stimulus", to: "stimulus.min.js" # Stimulus for JavaScript controllers
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js" # Stimulus loading helper
pin_all_from "app/javascript/controllers", under: "controllers" # Auto-import all controllers

# Add Rails UJS for handling method: :delete and other Rails-specific helpers
pin "@rails/ujs", to: "rails-ujs.js"
