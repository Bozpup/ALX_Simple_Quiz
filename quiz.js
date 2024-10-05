let feedback = document.getElementById("feedback");
// console.log(feedback.id);
const btn = document.getElementById("submit-answer");
function checkAnswer() {
  let correctAnswer = "4";
  selectedAnswer = null;
  const userAnswer = document.querySelector('input[name="quiz"]:checked');
  if (userAnswer) {
    selectedAnswer = userAnswer.value;
    if (selectedAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";

      console.log(selectedAnswer);
    } else if (selectedAnswer !== correctAnswer) {
      feedback.textContent = "That's incorrect. Try again!";

      console.log(selectedAnswer);
    }

    console.log("Feedback", feedback.textContent);
    console.log("Selected Answer", selectedAnswer);
  } else {
    feedback.textContent = "Pick an option";
  }
}
btn.addEventListener("click", checkAnswer);
