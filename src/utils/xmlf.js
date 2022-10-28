export default function (value){
  if (Array.isArray(this)) return this.find(el => el.name === value)
  let element = this.elements.find(el => el.name === value)
  if (!element) element = this.elements.find(el => el.type === value);
  return element
}