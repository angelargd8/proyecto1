const express = require('express')
const cors = require('cors')
const db = require('./db.js')

const swaggerUi = require('swagger-ui-express')
const yaml = require('js-yaml')

const app = express();

//middleware para json Aca es donde se usa los cors

var corsOptions = {
  origin: function(origin, callback){
    // Permitir solicitudes sin 'origin' (como las de aplicaciones móviles o curl)
    if(!origin) return callback(null, true);

    const allowedOrigins = ['http://127.0.0.1:3010', 'http://localhost:3010', 'http://localhost:5173','http://uwu-guate.site:3200'];
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('La política de CORS no permite este origen'), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors(corsOptions));
/*
const corsOptions = {
  origin: ['http://127.0.0.1:3010', 'http://localhost:3010', 'http://localhost:5173','http://uwu-guate.site:3200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
app.use(cors(corsOptions))*/

app.use(express.json())

//cargar el archivo YAML que describe endpoints
const swaggerDocument = yaml.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//app.use(express.static('vite-project'));


app.get('/', (/*req, res*/) => {
  console.log('Hello World from Express!')
})

app.get('/index.html', () => {
  console.log('Hello World from Express!')
})

app.get('/index', () => {
  console.log('Hello World from Express!')
})

//--get all posts
app.get('/posts/info', async (req, res) => {
  const posts = await db.getAllPosts()
  if(posts.length === 0) {
    res.status(200).json({message: 'Empty state: No posts found'})
  }else{
    res.status(200).json(posts)
  } 
  //console.log('posts', posts)
})

//--get all posts from  functions
app.get('/posts/f', async (req, res) => {
  const posts = await db.getAllPostsFunctions()
  if(posts.length === 0) {
    res.status(200).json({message: 'Empty state:No posts found'})
  }else{
    res.status(200).json(posts)
  } 
  //console.log('posts', posts)
})

//--create post
app.post('/posts', cors({ origin: 'http://127.0.0.1:3010' }), async (req, res) => {
  try{
    console.log(req)
    const { title, content, descripcion, imagen } = req.body
    console.log('post creado')
    const newPost = await db.createPost(title, content, descripcion, imagen)
    res.status(200).json({ message: 'Post created', post: newPost })
    console.log('Post created')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//--create post 2
app.post('/posts/p', cors({ origin: 'http://127.0.0.1:3010' }), async (req, res) => {
  try{
    console.log(req)
    const { funcion, informacion } = req.body
    const newPost = await db.createPost2(funcion, informacion )
    res.status(200).json({ message: 'Post created', post: newPost  })//

    console.log('Post created')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
  
})

//-get post by id
app.get('/posts/:postId', async (req, res) => {
  const { id } = req.params
  const post = await db.getPostId(id)
  res.status(200).json(post)
  //console.log('posts', posts)
})

//--update post
app.put('/post/update/:id', async (req, res) => {
  const { id } = req.params
  const { title, content, descripcion, imagen } = req.body
  const updatedPost = await db.updatePost(id, title, content, descripcion, imagen)
  if (!updatedPost) {
    res.status(400).json({ message: 'Post not found' })
  } else {
    res.status(200).json({ message: 'Post updated', post: updatedPost })
  }

})

//--delete post
app.delete('/post/delete/:id', async (req, res) => {
  const { id } = req.params
  const deletedPost = await db.deletePost(id)
  if (deletedPost) {
    res.status(204).json({ message: 'Post deleted' })
  }else{
    res.status(404).json({ message: 'Post not found' })
  }
  //console.log('Post deleted')

})


//get user
app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await db.getUser(username, password)

  if(user.length === 0) {
    res.status(404).json({ message: 'User not found' })
  }else{
    res.status(200).json(user)
  } 
})


//inicio del server
const port = 3010
app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

//validacion de implementacion de http 
app.use((req, res) => {
  res.status(501).send('error 501: metodo no implementad')
})
