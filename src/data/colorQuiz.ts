export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export const colorQuiz: QuizQuestion[] = [
  {
    question: "Which color was used for boys in the 1900s?",
    options: ["Pink", "Blue", "Green", "Yellow"],
    answer: "Pink"
  },
  {
    question: "Who can wear blue?",
    options: ["Only boys", "Only girls", "Everyone", "No one"],
    answer: "Everyone"
  },
  {
    question: "What was purple once considered?",
    options: ["A girly color", "A boy's color", "A royal color", "A common color"],
    answer: "A royal color"
  },
  {
    question: "What does green represent in many cultures?",
    options: ["Only boys", "Only girls", "Growth and life", "Nothing special"],
    answer: "Growth and life"
  },
  {
    question: "When did pink become associated with girls?",
    options: ["Always", "Before 1940", "After 1940", "Never"],
    answer: "After 1940"
  }
]; 