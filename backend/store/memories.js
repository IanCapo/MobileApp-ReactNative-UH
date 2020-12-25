let memories = [
  {
    "title": "Memory 1",
    "id": 1,
    "date": "09.06.2020",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu semper est, nec fringilla libero. Vestibulum quis aliquam neque, non suscipit mauris. Integer a dolor ac erat ultrices aliquet et ac tellus. Nulla pulvinar rhoncus nisl eu rhoncus. Integer facilisis magna eu massa tincidunt elementum. Vivamus eu mi auctor, lobortis sapien a, lobortis neque. Morbi sit amet euismod velit. Praesent arcu mi, finibus vitae leo id, fermentum tempor turpis. Nunc urna elit, ornare et malesuada quis, semper ut tortor. Curabitur facilisis nunc vitae orci mollis accumsan. Morbi vel dui sit amet ante eleifend tempor id in nibh. Praesent eget cursus eros, viverra ultrices dolor. Morbi ac libero vestibulum, feugiat ex sit amet, tincidunt tortor. Nulla tincidunt congue ante.",
    "image": {
      "url": "/Users/fabian/Documents/University of Hertfordshire/Mobile Computing/A_2/client/app/assets/_R9A9401.jpg"
    }
  },
  {
    "title": "Memory 2",
    "id": 2,
    "date": "10.06.2020",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu semper est, nec fringilla libero. Vestibulum quis aliquam neque, non suscipit mauris. Integer a dolor ac erat ultrices aliquet et ac tellus. Nulla pulvinar rhoncus nisl eu rhoncus. Integer facilisis magna eu massa tincidunt elementum. Vivamus eu mi auctor, lobortis sapien a, lobortis neque. Morbi sit amet euismod velit. Praesent arcu mi, finibus vitae leo id, fermentum tempor turpis. Nunc urna elit, ornare et malesuada quis, semper ut tortor. Curabitur facilisis nunc vitae orci mollis accumsan. Morbi vel dui sit amet ante eleifend tempor id in nibh. Praesent eget cursus eros, viverra ultrices dolor. Morbi ac libero vestibulum, feugiat ex sit amet, tincidunt tortor. Nulla tincidunt congue ante.",
    "image": {
      "url": "/Users/fabian/Documents/University of Hertfordshire/Mobile Computing/A_2/client/app/assets/_R9A9401.jpg"
    }
  }
];

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