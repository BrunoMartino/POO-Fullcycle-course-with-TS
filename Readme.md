# 🧩 Development Environment Setup — Laravel | Node | Nest.js

This repository provides a **complete Docker-based setup** for local development using **Laravel**, **Node.js**, or **Nest.js** — compatible with both **Docker Compose** and **VSCode Dev Containers**.

---

## ⚙️ 1. Create Your Project Locally

Before starting the containers, create your project on your local machine.

### 🐘 Laravel

```bash
composer create-project laravel/laravel .
```

### 🚀 Nest.js

```bash
npm i -g @nestjs/cli
nest new .
```

### 📦 Node.js

```bash
npm init -y
```

---

## 🧾 2. Environment Setup

Remove the default `.env` and `.env.example` from the framework installation.
Then copy the `.env.example` from **this setup** and adjust it for your project.

> ⚠️ Make sure that your database environment variables are correctly filled.
> The database will **not persist** if a root password is missing.

---

## 🐳 3. Copy Docker Configuration

Inside your project directory, copy:

- The `.docker` folder (includes Nginx, MySQL, and configuration)
- The `docker-compose.yaml`
- The corresponding base Dockerfile:

  - `Dockerfile-base-php` → for Laravel
  - `Dockerfile-base-node` → for Node/Nest.js

- Optionally, copy `.devcontainer` if you’re using VSCode Dev Containers

---

## 📁 4. Volumes & Paths

Project volumes are mounted inside the containers at:

- `/home/lara/app` → Laravel
- `/home/node/app` → Node.js | Nest.js

---

## ▶️ 5. Run It

Start your development environment:

```bash
docker compose up -d
```

Your app should now be running and accessible according to your Nginx setup.

---

## 💡 6. Notes

- Works seamlessly with **VSCode Dev Containers**
- Automatically handles dependency installation (`composer install` / `npm install`) when missing
- Containers are built with **PHP 8.2 FPM** and **Node 22.x**

---

## 🎉 Done!

Your environment is now ready.
Experiment, break things, rebuild — and have fun building awesome stuff!

---

**Author:** Bruno Galvão
**License:** MIT
