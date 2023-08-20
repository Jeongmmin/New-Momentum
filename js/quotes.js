const quotes = [
  {
    quote:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé"
  },
  {
    quote:
      "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant"
  },

  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    quote: "Laughter is timeless, imagination has no age, dreams are forever.",
    author: "Walt Disney"
  },
  {
    quote: "Only I can change my life, no one can do it for me",
    author: "Carol Burnett"
  },
  {
    quote: "Make money your god and it will plague you like the devil.",
    author: "Henry Fielding"
  },
  {
    quote: "Life-transforming ideas have always come to me through books.",
    author: "Bell Hooks"
  },
  {
    quote:
      "Only I can decide how i feel. So today, I'll choose happiness today.",
    author: "Alice in Wonderland"
  },
  {
    quote: "Put yourself on view. This brings your talents to light.",
    author: "Baltasar Gracian"
  }

  // 인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다."
  // 인생은 내면으로부터 나온다. 당신이 내면을 바꿀 때, 삶은 외부로 바뀐다.
  // 일을 시작하는 방법은 말하는 것을 멈추고 행동으로 옮기는 것이다.
  // 기회는 일어나는 대신 만드는 것이다.
  // 매일 두려운 일을 한가지 하세요.
  // 내 인생을 바꾸는 사람은 자신뿐입니다. 아무도 대신해 줄 수 없어요
  // 돈을 신 모시듯 하면 악마처럼 그대를 괴롭힐 것이다.
  // 나는 삶을 변화시키는 아이디어를 항상 책에서 얻었다.
  // 내 기분은 오직 내가 정할 수 있어. 그래서, 나는 오늘 행복을 선택할래.
  // 자신을 내 보여라. 그러면 재능이 드러날 것이다.
];

const quote = document.querySelector("#quote__box span:first-child");
const author = document.querySelector("#quote__box span:last-child");


const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// function MouseEnter() {
//   author.classList.remove("hidden");
// }

// function mouseLeave() {
//   author.classList.add("hidden");
// }


quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;

// quote.addEventListener("mouseenter", MouseEnter);
// quote.addEventListener("mouseleave", mouseLeave);