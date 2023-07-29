const { MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://pc-builder:PfhQgMY2M2Yn5Ov3@cluster0.zoj9s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
    console.log("database connect")
    const motherboardsCollection = client.db('pc_builder').collection('motherboards');

  // products
  if(req.method === "GET"){
    const motherboards = await motherboardsCollection.find({}).toArray();
    res.send({message:"success", status:200, data: motherboards})
  }
  

  } finally {
    // await client.close();
  }
}

export default run;
