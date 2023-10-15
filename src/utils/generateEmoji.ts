export function getRandomEmoji(): string {
  const emojis = [
    // Faces with different skin tones
    "😀",
    "😃",
    "🤎",
    "🤔",
    "🙄",

    // Hand gestures with different skin tones
    "✌🏻",
    "✌🏼",
    "✌🏽",
    "✌🏾",
    "✌🏿",

    // Miscellaneous colorful emojis
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "🤍",
    "🤎",
    "🌈",
  ];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}
