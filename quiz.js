var questions = [
  {
    prompt: "what is My name?\n (a)Shakib\n(b)RAfi\n (c)Samir",
    answer: "a",
  },
  {
    prompt: "Shakib Section ?\n (a)o7\n(b)o1\n (c)o6",
    answer: "c",
  },

  {
    prompt:
      "what is Shakibs ID ? \n (a)172-15-9606 \n(b)172-15-9586\n (c)172-15-9618",
    answer: "a",
  },
  {
    prompt: "who is our course teacher? \n (a)Rakib \n(b) Asif\n (c)Mariya",
    answer: "b",
  },
  {
    prompt: "which semester are we in? \n (a)9 \n(b)6\n (c)10",
    answer: "c",
  },
  {
    prompt: "Do you like web ? \n (a)yes \n(b)no\n (c)don't know ",
    answer: "a",
  },
  {
    prompt: "When was the WWW developed? \n (a)1980 \n(b)1990\n (c)1995",
    answer: "b",
  },
  {
    prompt:
      "In which year was the Internet created? \n (a)1960 \n(b)1969\n (c)1970",
    answer: "b",
  },
  {
    prompt:
      "What was the first recorded message transmitted over the Internet? \n (a)hello \n(b)world\n (c)login",
    answer: "c",
  },
  {
    prompt: "what is your University? \n (a)Diu \n(b)UIU\n (c)AIUB",
    answer: "a",
  },
];

var score = 0;
var n = prompt("How many question do you wanna answer ");

for (var i = 0; i < n; i++) {
  var response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
    alert("right!!");
  } else {
    alert("wrong!!!");
  }
}

alert(
  "you got " +
    score +
    " out of " +
    n +
    " questions correctly  " +
    (score / n) * 100 +
    "%"
);
