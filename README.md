Ecopulse – Climate Awareness Web App
EcoPulse is a modern, responsive climate change awareness platform built using Next.js 15, Tailwind CSS, and Gemini AI. It delivers real-time, AI-generated climate facts to help users understand environmental issues and promote sustainability.

🚀 Live Demo
🔗 Click to View Live — eco-pulse-five.vercel.app


🛠️ Tech Stack
Framework: Next.js 15

Styling: Tailwind CSS 4

Charts: Recharts

AI Integration: Google Gemini API

Icons: React Icons

State: React Hooks

pgsql
Copy
Edit
/public/hero.png
/public/climate-fact-box.png
✨ Features
🌡️ AI-Powered Climate Facts (Gemini integration)

📊 Responsive Charts & Visuals (Recharts)

📱 Fully Responsive Design

🧩 Modular Component Architecture

⚙️ Local Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/Santanilroy/EcoPulse.git
cd EcoPulse
Install dependencies

bash
Copy
Edit
npm install
Add Environment Variables

Create a .env.local file in the root:

ini
Copy
Edit
GEMINI_API_KEY=your_google_gemini_api_key
Start the development server

bash
Copy
Edit
npm run dev
Then open http://localhost:3000 in your browser.

📁 Folder Structure (Optional)
bash
Copy
Edit
/app          → App routes (Next.js)
/components   → React components
/styles       → Tailwind/global styles
/api          → Gemini API handler
🧠 Future Improvements
User Auth & Saved Facts

Real-time API Integration

Language Switch (i18n)

📜 License
MIT — feel free to use and modify!

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first.
