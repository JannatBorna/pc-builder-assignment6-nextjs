const { MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://pc-builder:PfhQgMY2M2Yn5Ov3@cluster0.zoj9s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    const cpusCollection = client.db('pc_builder').collection('cpus');

  // products
  if(req.method === "GET"){
    const cpus = await cpusCollection.find({}).toArray();
    res.send({message:"success", status:200, data: cpus})
  }
  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
