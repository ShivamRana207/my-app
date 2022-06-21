import * as fs from 'fs';


export default async function handler(req, res) {

  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allBlog = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
     console.log(element);
    myfile = await fs.promises.readFile(('blogdata/'+ element),'utf-8')
    allBlog.push(JSON.parse(myfile));
    console.log(allBlog);
  }
res.status(200).json(allBlog)
}