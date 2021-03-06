export default function invalidate(value, message) {
  var result = Object.create({
    valid: false,
    invalid: true
  })

  if (value === null || value === undefined) {
    result.value = value
    result.errors = [message]
    return result
  }

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
