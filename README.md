<!--
  AI Mock Interview Platform — README (HTML version)
  Drop this straight into your GitHub README.md; GitHub renders inline HTML nicely.
-->

<div align="center">

<h1>🤖TakeInt-AI Mock Interview Platform</h1>

<p><em>Practice technical & behavioral interviews with AI voice agents, instant feedback, and performance analytics.</em></p>

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14+-black?logo=nextdotjs" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" />
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" />
  <img alt="NextAuth" src="https://img.shields.io/badge/Auth-NextAuth.js-000000?logo=passbolt" />
  <img alt="shadcn/ui" src="https://img.shields.io/badge/UI-shadcn/ui-000000" />
  <img alt="Gemini" src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google" />
  <img alt="Vapi" src="https://img.shields.io/badge/Voice-Vapi-7C3AED" />
</p>

<p>
  <strong>Tech Stack:</strong> Next.js • React • TypeScript • Prisma • NextAuth • Google Gemini API • Vapi (voice agents) • shadcn/ui • Tailwind CSS
</p>

</div>

<hr />

<h2 id="overview">✨ Overview</h2>
<p>
AI Mock Interview Platform helps candidates rehearse interviews with realistic voice-driven agents and structured question sets. It generates tailored questions (role, level, skills), records responses (voice), scores performance, summarizes strengths & gaps, and tracks progress over time.
</p>

<ul>
  <li><strong>Voice Interviews:</strong> Real-time AI voice via <code>Vapi</code> (web calling + event webhooks).</li>
  <li><strong>Question Generation:</strong> Google <code>Gemini</code> for role-aware question sets.</li>
  <li><strong>Feedback & Summaries:</strong> Gemini-based rubric, strengths, and next steps.</li>
  <li><strong>Authentication:</strong> NextAuth with Google Sign-In + Credentials (demo accounts supported).</li>
  <li><strong>UI:</strong> <code>shadcn/ui</code> components with Tailwind CSS.</li>
  <li><strong>Data:</strong> Prisma ORM (PostgreSQL by default).</li>
  <li><strong>Pages:</strong> Landing, Interview Studio, History, Dashboard (Skill & Session analytics), Settings.</li>
</ul>

<hr />

<h2 id="demo">📸 Media (Paste Here)</h2>

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <b>Landing Page</b><br />
      <img width="1920" height="918" alt="landing-page" src="https://github.com/user-attachments/assets/0c277b82-0f42-4d83-8b72-a6cc3f937df7" />
    </td>
    <td width="50%" align="center">
      <b>Dashboard — Skills Performance</b><br />
      <img width="1920" height="876" alt="dashboard" src="https://github.com/user-attachments/assets/8c37a6a4-3b0f-4ebe-920f-b6f642ea05be" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <b>Mock Interview Studio</b><br />
      <img width="1920" height="876" alt="mock-interview" src="https://github.com/user-attachments/assets/a2c47862-0509-421a-9ba9-bca5258715da" />
    </td>
    <td width="50%" align="center">
      <b>Interview Panel</b><br />
      <img width="1920" height="918" alt="interview" src="https://github.com/user-attachments/assets/27446f16-44ee-4ec2-bd86-12c3bbc07469" />
    </td>
  </tr>
</table>

<p align="center">
  <b>🎥 Video Walkthrough</b><br />
  <a href="https://drive.google.com/file/d/1EoT9bPjASaSCWIkFWvS6jwsu_8WlhWrZ/view?usp=sharing" target="_blank">
    ▶️ Watch the demo video here
  </a>
</p>


<hr />

<h2 id="architecture">🧱 Architecture</h2>

<ul>
  <li><strong>App Router</strong> (Next.js) with server actions for secure data ops.</li>
  <li><strong>NextAuth</strong> for sessions (JWT) with Google provider + Credentials provider.</li>
  <li><strong>Prisma</strong> schema with <code>User</code>, <code>Interview</code>, <code>Question</code>, <code>Answer</code>, <code>Score</code>,<code>Transcript</code>.</li>
  <li><strong>Vapi</strong> session init on the client, server-side webhook (<code>/api/vapi/webhook</code>) for call events & transcripts.</li>
  <li><strong>Gemini</strong> used server-side for question generation, summaries, and feedback .</li>
  <li><strong>shadcn/ui</strong> for accessible, consistent components; charts via a lightweight React chart lib.</li>
</ul>


<hr />

<h2 id="features">✅ Features</h2>

<ul>
 <li><strong>Role-based Templates:</strong> Option to create custom mock interviews.</li>
  <li><strong>Interview Modes:</strong> Behavioral, Algo/DSA, System Design, Mixed.</li>
  <li><strong>Voice :</strong> Speak with the agent .</li>
  <li><strong>Scoring:</strong> Evaluated across key dimensions — Problem Solving, System Design, Communication Skills, Technical Accuracy, Behavioral Responses, and Time Management.</li>
  <li><strong>Feedback:</strong> Bullet tips, improvement plan, follow-up questions.</li>
  <li><strong>History:</strong> All sessions with transcripts & audio replays.</li>
  <li><strong>Dashboard:</strong> Skill radar, progress over time, topic heat-map.</li>
</ul>

<hr />

<h2 id="requirements">🔧 Requirements</h2>

<ul>
  <li>Node.js 18+ (suggested 20+)</li>
  <li>PNPM / Yarn / NPM (examples use <code>pnpm</code>)</li>
  <li>Database: PostgreSQL (default)</li>
  <li>Environment variables configured (see below)</li>
</ul>

<hr />

<h2 id="env">🔐 Environment Variables</h2>

<p>Create <code>.env.local</code> in the project root:</p>

<pre><code># NextAuth
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Voice Agents (Vapi)
NEXT_PUBLIC_VAPI_TOKEN=

# Database (Postgres example)
DATABASE_URL=

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=
</code></pre>

<p><small>
Tip: Generate <code>AUTH_SECRET</code> with <code>openssl rand -base64 32</code>
</small></p>

<hr />



<h2 id="voice">🗣️ Voice (Vapi) Integration</h2>

<ul>
  <li><strong>Client:</strong> Initialize Vapi with <code>NEXT_PUBLIC_VAPI_TOKEN</code>; start/stop calls from the Interview .</li>
  <li><strong>Server:</strong> <code>POST /api/vapi/webhook</code> receives call events, partial/final transcripts, and stores them via Prisma.</li>
  <li><strong>Sync:</strong> On-call end, the transcript triggers Gemini summarization + scoring.</li>
</ul>

<hr />

<h2 id="gemini">🧠 Google Gemini Usage</h2>

<ul>
  <li><strong>Question Generation:</strong> Creates interview questions based on role, level, and skills.</li>
  <li><strong>Feedback:</strong> Provides detailed interview feedback — scores, strengths, improvements, and follow-up suggestions.</li>
</ul>

<hr />


<h2 id="pages">🧭 Key Pages</h2>

<ul>
  <li><strong>Landing</strong> – Marketing info, feature highlights, and call-to-action (sign in / get started).</li>
  <li><strong>Dashboard</strong> – Skill radar, recent improvements, session trends, and quick actions.</li>
  <li><strong>Create Interview</strong> – Build a custom mock interview (role, skills, level, mode).</li>
  <li><strong>Mock Interview List</strong> – View all created mock interviews and select one to take.</li>
  <li><strong>Interview Panel</strong> – Live interview space (voice and real-time Q&A).</li>
  <li><strong>History</strong> – Past sessions with transcripts and feedback.</li>
</ul>
<hr />
<p align="center">
  Made with ❤️ using Next.js, TypeScript, Prisma, NextAuth, shadcn/ui, Vapi, and Google Gemini.
</p>
