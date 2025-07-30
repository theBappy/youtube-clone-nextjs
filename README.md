# 🎥 uTube - Fullstack Video Sharing Platform

uTube is a full-featured, you can say a youtube clone exactly like youtube, YouTube-like video platform built with bleeding-edge technologies. It offers everything from high-performance video playback and real-time processing to intelligent content management, powered by AI and a modular design.

---

## 📸 Preview

Add up to 4–5 screenshots here of your app’s main features, such as:

<img width="1280" height="1072" alt="yt1" src="https://github.com/user-attachments/assets/23783120-cc2a-47ba-8ff4-b64148447fd6" />
<img wi<img width="1280" height="798" alt="yt2" src="https://github.com/user-attachments/assets/086ca9ea-1a70-49c3-81ae-764cf8b75e58" />
dth="1280" height="672" alt="yt8" src="https://github.com/user-attachments/assets/c170aa7f-71f0-48b1-a951-1273828850d6" />
<img width="1280" height="680" alt="yt3" src="https://github.com/user-attachments/assets/7abcc6e0-05cd-409c-b253-cb548aa840ea" />
<img width="1280" height="1153" alt="yt11" src="https://github.com/user-attachments/assets/0391d808-27e5-4b77-adf7-e3d4ce294510" />
<img width="1280" height="686" alt="yt7" src="https://github.com/user-attachments/assets/36bd0473-0c3f-4ac6-9e72-5ad57b2b3d64" />
<img width="1280" height="672" alt="yt10" src="https://github.com/user-attachments/assets/4437c613-7bc5-4c68-ab55-b73613df713a" />

---

## 🚀 Features

### 🎬 Video Management

* Advanced video player with quality/resolution controls
* Real-time video processing with [Mux](https://www.mux.com/)
* Uploading via UploadThing
* Smart thumbnail generation
* Automatic transcription
* AI-powered title & description generation

### 📹 User Engagement

* Like/Dislike system with real-time UI updates
* Interactive comments
* Watch history tracking
* Playlist creation & management

### 🧑‍💼 Creator Studio

* View detailed metrics (views, likes, watch time)
* Manage uploaded videos
* Update video metadata (title, description, thumbnail, etc.)

### 🌍 Responsive UI/UX

* Mobile-first design with full responsiveness
* TailwindCSS & [ShadcnUI](https://ui.shadcn.com/) components
* Dark & Light Mode support

### 🔐 Authentication & Authorization

* Secure user auth via [Clerk.dev](https://clerk.dev/)
* Role-based access
* Auth-protected routes and content

---

## 🧱 Tech Stack

| Tech                                                                                                                | Description                  |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=nextdotjs)                         | App framework (v15)          |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)               | Frontend UI (v19)            |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript)                  | Type-safe code               |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge\&logo=tailwind-css)              | Utility-first CSS            |
| ![tRPC](https://img.shields.io/badge/tRPC-2596be?style=for-the-badge\&logo=trpc)                                    | End-to-end type-safe APIs    |
| ![Clerk](https://img.shields.io/badge/Clerk-F5F5F5?style=for-the-badge\&logo=clerk)                                 | Authentication provider      |
| ![Mux](https://img.shields.io/badge/Mux-000000?style=for-the-badge\&logo=mux)                                       | Video streaming & processing |
| ![UploadThing](https://img.shields.io/badge/UploadThing-000000?style=for-the-badge\&logo=uploadthing)               | File upload handler          |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white) | Relational database          |
| ![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-FF6B81?style=for-the-badge\&logo=drizzle)                 | Type-safe DB ORM             |
| ![Upstash](https://img.shields.io/badge/Upstash-1A202C?style=for-the-badge\&logo=upstash)                           | Edge cache & rate-limiting   |
| ![QStash](https://img.shields.io/badge/QStash-000000?style=for-the-badge\&logo=vercel)                              | Background task queue        |

---

## 📂 Project Structure

```
/utube
├── app              # Next.js App Router files
├── components       # UI Components (Buttons, Player, etc.)
├── features         # App features grouped by domain (dashboard, upload, etc.)
├── modules          # Types and schemas
├── trpc             # tRPC client and server setup
├── lib              # Utility functions and constants
├── public           # Static assets
├── styles           # Global styles
└── prisma           # DB schema and Drizzle migrations
```

---

## 🧪 Development

```bash
# Install dependencies
bun install

# Setup environment
cp .env.example .env

# Run dev server
bun run dev:all
```

---

## 📦 Deployment

UTube is designed to work seamlessly with [Vercel](https://vercel.com/) for frontend and serverless deployment, or any container-based hosting provider.

* PostgreSQL (e.g., NeonDB or Supabase)
* UploadThing for file storage
* Mux credentials for video streaming
* Clerk for authentication
* Upstash/QStash for background processing

---

## 📃 License

This project is licensed under the MIT License.

---

## 🙌 Credits

* [Mux](https://www.mux.com/)
* [Clerk.dev](https://clerk.dev/)
* [UploadThing](https://uploadthing.com/)
* [tRPC](https://trpc.io/)
* [Drizzle ORM](https://orm.drizzle.team/)
* [TailwindCSS](https://tailwindcss.com/)
* [Shadcn UI](https://ui.shadcn.com/)
