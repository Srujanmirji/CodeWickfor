import axios from 'axios';

// Mock API endpoints
const MOCK_DELAY = 1000;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  submitIdea: async (idea: string) => {
    await delay(MOCK_DELAY);
    return { id: 'idea-123', status: 'submitted', idea };
  },
  
  analyzeIdea: async (id: string) => {
    await delay(MOCK_DELAY * 2);
    return { id, status: 'analyzing' };
  },
  
  getResults: async (id: string) => {
    await delay(MOCK_DELAY);
    return {
      id,
      score: 78,
      insights: [
        { expert: 'Fox', insight: 'The logic is sound, but consider the edge cases.' },
        { expert: 'Owl', insight: 'Market intelligence shows a 15% YoY growth in this sector.' },
        { expert: 'Shark', insight: 'Business model needs stronger recurring revenue streams.' },
        { expert: 'Bee', insight: 'High demand validated by recent search trends.' },
        { expert: 'Wolf', insight: 'Competitive strategy requires a stronger moat.' },
        { expert: 'Cheetah', insight: 'Speed to market is critical; launch MVP within 3 months.' },
        { expert: 'Peacock', insight: 'Branding should focus on the premium aspect of the service.' },
        { expert: 'Eagle', insight: 'Long term vision aligns well with emerging technologies.' },
      ]
    };
  },
  
  getDashboard: async () => {
    await delay(MOCK_DELAY);
    return {
      ideas: [
        { id: 'idea-123', title: 'AI Pet Sitter', score: 78, date: '2026-03-10' },
        { id: 'idea-124', title: 'VR Meeting Rooms', score: 65, date: '2026-03-05' },
      ]
    };
  }
};
