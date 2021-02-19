function handle(event) {
  console.log(event.currentTarget)
  console.log(event.target)
}
document.body.onclick = handle
