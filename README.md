# My Portfolio Website

A personal portfolio website built with **Next.js**, featuring four pages: Home, Skills, Projects, and Contact.

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [React](https://react.dev/) — UI library
- CSS / Tailwind CSS (optional, for styling)

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Introduction, hero section, brief about me |
| Skills | `/skills` | List of technical skills and tools |
| Projects | `/projects` | Showcase of personal/professional projects |
| Contact | `/contact` | Contact form or contact information |

## 📁 Project Structure

This project uses the Next.js **App Router**:

```
mon-projet/
├── public/
│   ├── icons/
│   ├── projects/
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.png
│   ├── profile.png
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/
│       ├── components/
│       │   ├── contact.js
│       │   ├── ContactForm.js
│       │   ├── Footer.jsx
│       │   ├── navbar.jsx
│       │   ├── Process.js
│       │   ├── projects.js
│       │   ├── ScrollReveal.jsx
│       │   ├── SectionOne.js
│       │   ├── Services.js
│       │   ├── skills.js
│       │   └── VantaBackground.jsx
│       ├── contacts/
│       │   └── page.js         # Contact page
│       ├── skills/
│       │   └── page.js         # Skills page
│       ├── work/
│       │   └── ...             # Projects page
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       └── page.js             # Home page
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

### Route → Page mapping

| Page | File | Route |
|------|------|-------|
| Home | `src/app/page.js` | `/` |
| Skills | `src/app/skills/page.js` | `/skills` |
| Projects | `src/app/work/page.js` | `/work` |
| Contact | `src/app/contacts/page.js` | `/contacts` |

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone  https://github.com/ayoubmoali27-lgtm/Portfolio.git
cd portfolio-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform built by the creators of Next.js.

```bash
npm install -g vercel
vercel
```

## ✨ Features

- Responsive design (mobile-friendly)
- Fast page navigation with Next.js routing
- Reusable components (Navbar, Footer, Cards)
- SEO-friendly meta tags

## 📬 Contact

Feel free to reach out through the Contact page or via:
- Email: ayoubdev27@gmail.com

- GitHub: ayoubmoali27-lgtm · GitHub

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
