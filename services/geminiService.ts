
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static async getAI() {
    // Note: process.env.API_KEY is handled by the platform
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  static async generateCardRender(prompt: string): Promise<string | null> {
    try {
      const ai = await this.getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      console.error("AI Generation Error:", error);
      throw error;
    }
  }

  static async checkApiKey(): Promise<boolean> {
    if (typeof (window as any).aistudio?.hasSelectedApiKey === 'function') {
      return await (window as any).aistudio.hasSelectedApiKey();
    }
    return true; // Fallback for environments where this isn't defined
  }

  static async requestApiKey(): Promise<void> {
    if (typeof (window as any).aistudio?.openSelectKey === 'function') {
      await (window as any).aistudio.openSelectKey();
    }
  }
}
