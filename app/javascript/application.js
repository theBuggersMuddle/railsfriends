// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import * as Rails from "@rails/ujs";
Rails.start();  // Initializes Rails UJS

// Disable Turbo globally to ensure UJS works without interference from Turbo
import { Turbo } from "@hotwired/turbo-rails";
Turbo.session.drive = false;  // Disable Turbo globally

// Disable Turbo for links with data-method="delete" to ensure DELETE requests work
document.addEventListener("turbo:load", () => {
  document.querySelectorAll("a[data-method='delete']").forEach((el) => {
    el.dataset.turbo = "false";  // Disables Turbo for delete links
  });
});
