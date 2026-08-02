export function CleanWord(word: string): string {
  const exploded = word.trim().toLowerCase().split(/^!@#\$%\^&\*\+=\._-\+\//g);
  const capitalized = exploded.map((w, index) => {
    return index === 0 ? w[0].toUpperCase() + w.slice(1) : w;
  });
  return capitalized.join('');
}
