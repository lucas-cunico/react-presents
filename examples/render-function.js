const jsonForm = { firstName: "José", lastName: "Silva", email: "jose.silva@mailnator.com", newsletter: true}

const form = Object.keys(jsonForm).reduce((acc, key) => {
  acc.append(key, jsonForm[key])
  return acc
}, new FormData())