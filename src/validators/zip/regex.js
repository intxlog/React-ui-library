export default function (string) {
  let re =  /^\d{5}$|^\d{5}\-?\d{4}$|(^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$)/
  return re.test(string)
}