let feedback = document.getElementById("feedback");
// console.log(feedback.id);
const btn = document.getElementById("submit-answer");
function checkAnswer() {
  let correctAnswer = "4";
  userAnswer = null;
  const useranswer = document.querySelector('input[name="quiz"]:checked');
  if (useranswer) {
    userAnswer = useranswer.value;
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";

      console.log(userAnswer);
    } else if (userAnswer !== correctAnswer) {
      userAnswer === correctAnswer;
      feedback.textContent = "That's incorrect. Try again!";

      console.log(userAnswer);
    }

    console.log("Feedback", feedback.textContent);
    console.log("Selected Answer", userAnswer);
  } else {
    feedback.textContent = "Pick an option";
  }
}
btn.addEventListener("click", checkAnswer);
