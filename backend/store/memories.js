let memories = [];

const getMemories = () => memories;

const getMemoryById = (id) => memories.find((memory) => memory.id === id);

const addMemory = (memory) => {
  memory.id = memories.length + 1;
  memories.push(memory)
}

const updateMemory = (memory, key, value) => {
  if(key === "image") {
    memory[key]["url"] = value
  } else {
    memory[key] = value
  }
}

module.exports = {
  getMemories,
  getMemoryById,
  addMemory,
  updateMemory
};