require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Check if API key is loaded
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY is not set in environment variables');
  console.log('Please check your .env file in the project root');
  process.exit(1);
}

console.log('✅ OpenAI API key loaded successfully');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, strategyName, goal, humanInLoop } = req.body;

    // Check if this is a goal generation request
    const isGoalGeneration = goal === 'Generate a creative goal';
    
    // Create system message for strategy context
    const systemMessage = {
      role: 'system',
      content: isGoalGeneration 
        ? `You are a strategic business advisor specializing in goal setting. Your task is to create specific, measurable, achievable, relevant, and time-bound (SMART) business goals. 

Based on the user's request and strategy context, generate a concise business goal that:
- Is specific and measurable (includes metrics, percentages, or numbers)
- Has a realistic timeframe (months, quarters, years)
- Is directly related to what the user wants to achieve
- Is written in a professional, actionable tone

CRITICAL: You must respond with ONLY the actual goal statement. DO NOT include ANY of these:
- NO prefixes like "Goal:", "Business Goal:", "Objective:", "Target:", "Strategy:", etc.
- NO markdown formatting (**bold**, *italic*, etc.)
- NO bullet points, numbering, or lists
- NO introductory phrases like "The goal is to", "Our objective is", "We aim to"
- NO explanatory text, context, or additional information
- NO special characters, colons, or formatting

Example of WRONG response: "Business Goal: Achieve 20% market share"
Example of CORRECT response: "Achieve 20% market share in EMEA within 2 years"

Just start directly with the action verb and goal content.`
        : `You are a strategic business advisor helping with strategy planning. 
        ${strategyName ? `Current strategy: ${strategyName}` : ''}
        ${goal ? `Goal: ${goal}` : ''}
        ${humanInLoop ? `Human stakeholder: ${humanInLoop}` : ''}
        
        Provide concise, actionable strategic advice. Keep responses focused and practical. Use bullet points when appropriate for clarity.`
    };

    // Convert frontend messages to OpenAI format
    const openAIMessages = [
      systemMessage,
      ...messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }))
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: openAIMessages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    res.json({ reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: 'Failed to get AI response',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 