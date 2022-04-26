import { createServer } from "node:http"

const app = createServer( (req, res) => {
  const currentDate = new Date().toLocaleString("pt-br")

  res.writeHead(200,"ok", {"Access-Control-Allow-Origin":"*"})

  return res.end(currentDate)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Backend na porta: " + PORT))