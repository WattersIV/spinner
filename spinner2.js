const spinner = ["\r|  ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]
let timer =  100
for (const position of spinner) {
  setTimeout(() => { 
    process.stdout.write(position)
  }, timer) 
  timer += 200
} 