const feathers = require('@feathersjs/feathers')
const feat = feathers()

// Register a simple todo service that returns the name and some text
feat.use('todos', {
  async get (name) {
    // Return an object in the form of { name, text }
    return {
      name,
      text: `You have to do ${name}`
    }
  }
})

// A function that gets and logs a todo from the service
async function getTodo (name) {
  // Get the service we registered above
  const service = feat.service('todos')
  // Call the `get` method with a name
  const todo = await service.get(name)

  // Log the todo we got back
  console.log(todo)
}

getTodo('dishes')

export default feat
