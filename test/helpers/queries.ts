const ignoreHTML = (txt: string) => (_: any, el: any) => el.textContent === txt

export {
  ignoreHTML
}
