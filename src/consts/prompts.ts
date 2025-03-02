import { SupportedLanguage } from "@/components/features/translation";

const languageNames = {
  en: "English",
  fr: "French",
  es: "Spanish",
  de: "German",
  it: "Italian",
};

// Generate prompt for translation
export const TranslationPrompt = (
  inputText: string,
  language: SupportedLanguage
) => {
  const prompt = `Please translate this text: "${inputText}"
        Follow these guidelines:
      - Translate the text to ${languageNames[language]}
        - Correct for grammar, spelling, and punctuation errors
        - Return only the translated text with no explanations"
        `;

  return prompt;
};

// Generate prompt for correction
export const CorrectionPrompt = (inputText: string) => {
  const prompt = `Please correct this text: "${inputText}"
    Follow these guidelines:
    - Correct for grammar, spelling, and punctuation errors
    - Return only the corrected text with no explanations"
    `;

  return prompt;
};

// Generate prompt for reformulation
export const ReformulationPrompt = (
  inputText: string,
  tone: string,
  language: SupportedLanguage,
  length: number[],
  format: string
) => {
  const prompt = `Please reformulate this text: "${inputText}"
    Follow these guidelines:
        - Reformulate the text with ${languageNames[language]} language
        - Use as tone ${tone} and ${format} as format of the text and the text length should be at least ${length[0]} chars
        - Return only the reformulated text with no explanations"
    `;

  return prompt;
};

// Generate prompt for compose
export const ComposePrompt = (
  inputText: string,
  tone: string,
  language: SupportedLanguage,
  length: number[],
  contentType: string,
  audience: string
) => {
  const prompt = `Please compose an ${contentType} to this text: "${inputText}"
      Follow these guidelines:
          - compose the text with ${languageNames[language]} language
          - Use as tone ${tone} and the text length should be at least ${length[0]} chars
          - The text should be targeted to ${audience} as audience
          - Return only the composed text with no explanations"
      `;

  return prompt;
};
