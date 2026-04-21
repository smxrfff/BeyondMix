# BeyondMix - AI Mix Engineer

BeyondMix is an AI-powered mix feedback tool built specifically for rap producers. Most producers mix by ear and guesswork, but BeyondMix gives you the data and numbers behind the instinct. It runs real-time frequency analysis on your tracks directly in the browser and feeds those measurements to an AI mixing engineer named Marcus, who gives you specific, step-by-step advice to fix your mix.

## Features
* **Real-time In-Browser Audio Analysis**: Uses the Web Audio API to run a fast FFT pass on the first 10 seconds of your audio. It measures low end vs. vocal balance, stereo width, dynamic range, and overall loudness directly on your device. No audio files are sent to an external server for this step.
* **Data-Driven AI Feedback**: The AI persona, Marcus, uses your actual track metrics to diagnose root issues and give actionable, number-specific advice. He will give you exact EQ cuts, compression ratios, and plugin parameters.
* **Plugin Chain Analysis**: Upload screenshots of your plugin chain so Marcus can review your signal flow and specific parameter settings.
* **Reference Track Mode**: Upload a song you want to sound like, and get a roadmap to match its vocal tone, warmth, and presence.
* **Follow-Up Studio Chat**: Ask specific questions about the feedback and get real-time answers, just like you're in the studio with an engineer.

## Project Structure
The application is designed as a serverless web app meant to be deployed on Vercel.
* `index.html`: The complete frontend interface, containing the UI, styling, Web Audio API analysis logic, and client-side application state.
* `api/analyze.js`: The backend serverless Node.js function that securely holds your API key and handles communication with the Anthropic API.
* `vercel.json`: The configuration file that tells Vercel how to route requests to the backend function.

## Dependencies & Prerequisites
* **Anthropic API Key**: You need an active Anthropic API key with at least $5 in credits to generate the AI feedback.
* **Vercel Account**: Required for deploying the project so the serverless backend can securely run.
* **GitHub**: Recommended for version control and seamless auto-deployments to Vercel.

## How to Run & Deploy

### 1. Local Testing (Audio Analysis Only)
You can test the frontend design and Web Audio API analysis locally without spending API credits.
1. Double-click the `index.html` file to open it in a modern web browser (Chrome or Safari recommended).
2. Upload an audio track to see the real-time frequency metrics dashboard.
*(Note: Clicking "Analyze mix" for AI feedback will fail locally because the backend serverless function is required to handle the Anthropic API call).*

### 2. Full Vercel Deployment (Recommended)
To use the full AI features, deploy the repository to Vercel.
1. Push your project folder (containing `index.html`, `vercel.json`, and the `api/` folder) to a GitHub repository.
2. Log in to Vercel and click **Add New Project**.
3. Import your GitHub repository.
4. Go to the project **Settings** > **Environment Variables**.
5. Add a new variable:
    * **Name**: `ANTHROPIC_API_KEY`.
    * **Value**: Your actual Anthropic API key (e.g., `sk-ant-...`).
6. Ensure the Production, Preview, and Development boxes are checked, then click **Save**.
7. Go to the **Deployments** tab, click the three dots on the most recent deployment, and click **Redeploy**.
8. Open your live Vercel URL (e.g., `beyondmix.vercel.app`) to use the fully functional app.
