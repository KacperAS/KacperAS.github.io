# Kacper Siedlec — Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. It is designed to publish directly on GitHub Pages without a build step.

## Publish on GitHub Pages

1. Create a public repository named **`kacperas.github.io`** (all lowercase).
2. Upload the contents of this folder to the repository root. `index.html` must be at the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. After deployment, visit https://kacperas.github.io. The first deployment can take several minutes.

## Personalise before sharing

Search `index.html` for the following placeholders and replace them:

- `YOUR.EMAIL@example.com` — your professional email (appears twice).
- `YOUR-LINKEDIN` — the final part of your LinkedIn profile URL.
- `DATES TO CONFIRM` — your Westminster Enterprise Network dates.
- The CV link points to `assets/documents/Kacper-Siedlec-CV.pdf`. Add your PDF with that exact filename.
- Replace the illustrative project artwork by adding approved images to `assets/images/projects/` using these filenames:
  - `pricing-dashboard.jpg`
  - `forecast-dashboard.jpg`
  - `ticketing-dashboard.jpg`
  - `customer-experience.jpg`

The project cards already have attractive CSS artwork as a fallback. Once an image with the matching filename exists, it will appear in the project preview modal. To make the image appear on the card itself too, tell me and I can update the layout.

Review all job dates, job descriptions and project claims before publishing. The dashboard artwork is illustrative, not a screenshot of company systems. Only publish portfolio images and information you are authorised to share.

## Edit files

- `index.html` — page content, links, experience, skills and projects.
- `assets/css/style.css` — visual design, layout, responsive behaviour and animations.
- `assets/js/main.js` — navigation, scroll progress, reveal effects and project modal.

No Node.js, npm, framework or build process is required.
