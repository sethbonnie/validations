export default function invalidate(value, message) {
  var result = Object.create({
    valid: false,
    invalid: true
  })

  result.value = value.value ? value.value : value;

  if (value.errors && value.errors.slice) {
    result.errors = value.errors.slice()
    result.errors.push(message)
  }
  else {
    result.errors = [message]
  }

  return result
}
