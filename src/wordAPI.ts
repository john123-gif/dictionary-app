export interface DictionaryData {
    word: string;
    phonetics: {
        text: string;
        audio: string;
    }[];
    meanings: {
      partOfSpeech: string;
      definitions: {
        definition: string;
        example: string;
      }[];
    synonyms: string[];
    }[];
    sourceUrls: string[];
  }

export const fetchWord = async (word: string):Promise<DictionaryData[]> => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = response.json();
    return data;
}