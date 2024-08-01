const { GoogleGenerativeAI } = require("@google/generative-ai");
const { API_KEY } = require("../constants/constants");

const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

