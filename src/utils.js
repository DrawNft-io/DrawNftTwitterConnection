// List of possible compliments
const compliments = [
  "Your drawing is absolutely stunning!",
  "The colors and composition in your drawing are incredible.",
  "Your attention to detail in your drawing is really impressive.",
  "The emotion and expression in your drawing are so captivating.",
  "Your drawing has a unique and beautiful style.",
  "The composition of your drawing is so well balanced and pleasing to the eye.",
  "Your drawing is a true masterpiece.",
  "The colors and textures in your drawing are so rich and vibrant.",
  "Your drawing captures the essence of the subject perfectly.",
  "Your drawing has such a lively and energetic feel to it.",
  "The light and shadow in your drawing are so beautifully rendered.",
  "Your drawing has a sense of movement and energy that is truly captivating.",
  "The creativity and imagination in your drawing are truly inspiring.",
  "Your drawing is so full of life and character.",
  "The depth and complexity of your drawing are truly impressive.",
  "The brushwork in your drawing is so skillful and expressive.",
  "Your drawing has a sense of peace and serenity that is truly calming.",
  "The perspective and spatial relationships in your drawing are so well executed.",
  "Your drawing has a sense of whimsy and playfulness that is truly delightful.",
  "The subject of your drawing is captured so beautifully and accurately.",
  "Your drawing has a sense of movement and flow that is truly mesmerizing.",
  "The atmosphere and mood in your drawing are so evocative and vivid.",
  "Your drawing has a sense of mystery and intrigue that is truly engaging.",
  "The contrast and harmony of colors in your drawing are so well balanced.",
  "Your drawing has a sense of depth and dimension that is truly impressive.",
  "The textures and details in your drawing are so finely rendered and realistic.",
  "Your drawing has a sense of elegance and refinement that is truly admirable.",
  "The composition and framing of your drawing are so well thought out and effective.",
  "The perspective and depth in your drawing are so well executed.",
  "Your drawing has such a delicate and ethereal beauty.",
  "The texture and brushwork in your drawing are so masterfully done.",
  "Your drawing has a sense of power and strength that is truly striking.",
  "The composition and layout of your drawing are so harmonious and balanced.",
  "Your drawing has a sense of warmth and intimacy that is truly inviting.",
  "The details and intricacies in your drawing are so finely rendered and captivating.",
  "Your drawing has a sense of motion and fluidity that is truly mesmerizing.",
  "The contrast and values in your drawing are so well handled and striking.",
  "Your drawing has a sense of mystery and enigma that is truly alluring.",
  "The light and shadow in your drawing are so beautifully integrated and balanced.",
  "Your drawing has a sense of wonder and awe that is truly inspiring.",
  "The colors and hues in your drawing are so rich and vibrant.",
  "Your drawing has a sense of magic and fantasy that is truly captivating.",
  "The subject and content of your drawing are so thought-provoking and meaningful.",
];
/**
 * Generates a random compliment from the list of possible compliments.
 * @returns A random compliment.
 */
export const generateCompliment = () => {
  const index = Math.floor(Math.random() * compliments.length);
  return compliments[index];
};
