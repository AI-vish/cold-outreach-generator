import Message from "../models/Message.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export const generateMessage = async (req, res) => {
  try {
    const { company, role, recruiter = "" } = req.body;

    if (!company || !role) {
      return res.status(400).json({
        success: false,
        message: "Company and role are required.",
      });
    }

    const prompt = `
Generate a concise and professional cold outreach message.

Company: ${company}
Role: ${role}
Recruiter: ${recruiter || "Hiring Team"}

Requirements:
- professional tone
- confident but not arrogant
- recent graduate tone
- concise
- under 120 words
- personalized
`;

    let generatedMessage;
    try {
      const result = await model.generateContent(prompt);
      generatedMessage = result.response.text();
    } catch (_geminiError) {
      return res.status(502).json({
        success: false,
        message: "Failed to generate message with Gemini.",
      });
    }

    const savedMessage = await Message.create({
      company: company.trim(),
      role: role.trim(),
      recruiter: recruiter.trim(),
      message: generatedMessage,
    });

    return res.status(201).json({
      success: true,
      data: savedMessage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate message.",
      error: error.message,
    });
  }
};

export const getMessages = async (_req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch messages.",
      error: error.message,
    });
  }
};
