// let message: string;

// message = "HELO";

// console.log(message);

const text = "hello deno, this my code again and again and hello";

Deno.writeFile("output.txt", new TextEncoder().encode(text)).then(() => {
  console.log("wrote the file!");
});