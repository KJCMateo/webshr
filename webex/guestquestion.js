let currentQuestion = 0;
const questions = [
  {
    question: "What's your full name?",
    input: '<input type="text" id="guest-name" name="guest-name" placeholder="Enter your name" required>'
  },
  {
    question: "What are you hoping to learn about our campus?",
    input: '<textarea id="campus-expectations" name="campus-expectations" rows="4" placeholder="Share your expectations" required></textarea>'
  },
  {
    question: "Which programs are you interested in? (Select all that apply)",
    input: `
      <input type="checkbox" id="engineering" name="interested-programs" value="Engineering">
      <label for="engineering">Engineering</label><br>
      <input type="checkbox" id="it" name="interested-programs" value="Information Technology">
      <label for="it">Information Technology</label><br>
      <input type="checkbox" id="business" name="interested-programs" value="Business">
      <label for="business">Business</label><br>
      <input type="checkbox" id="arts" name="interested-programs" value="Arts">
      <label for="arts">Arts</label><br>`
  },
  {
    question: "How do you feel about your campus visit so far?",
    input: '<textarea id="campus-visit-experience" name="campus-visit-experience" rows="4" placeholder="Share your thoughts" required></textarea>'
  },
  {
    question: "Are you considering applying to STI?",
    input: `
      <input type="radio" id="yes" name="apply-sti" value="Yes">
      <label for="yes">Yes</label><br>
      <input type="radio" id="no" name="apply-sti" value="No">
      <label for="no">No</label><br>`
  },
  {
    question: "Which campus location are you most interested in?",
    input: '<input type="text" id="preferred-campus-location" name="preferred-campus-location" placeholder="Enter preferred location" required>'
  }
];

function showQuestion() {
  if (currentQuestion < questions.length) {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    document.getElementById("question-input").innerHTML = questions[currentQuestion].input;
    document.getElementById("next-button").textContent = currentQuestion === questions.length - 1 ? "Submit" : "Next";
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    // Implement form submission here, or capture data
    document.querySelector("form").submit();
  }
}

window.onload = showQuestion;
