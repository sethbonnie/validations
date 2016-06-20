export default function validate(value, message) {
  var result = Object.create({
    valid: true,
    invalid: false
  })
  
  result.value = (value !== undefined && value !== null && value.value) ? 
                  value.value : 
                  value;

  return result;
}
