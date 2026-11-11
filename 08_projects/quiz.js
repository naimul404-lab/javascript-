const questions = [
  { question: "What keyword declares a block-scoped constant?", answer: "const" },
  { question: "What does [1, 2, 3].length return?", answer: "3" },
  { question: "Which value represents an intentional absence of a value?", answer: "null" },
];

let score = 0;
for (const { question, answer } of questions) {
  // Answers are predefined for this non-interactive practice example.
  const practiceAnswer = answer;
  console.log(`${question}\nAnswer: ${practiceAnswer}`);
  score += 1;
}
console.log(`Practice score: ${score}/${questions.length}`);
