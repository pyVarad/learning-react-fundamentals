export interface Props {
  title: string,
  image: string,
  name: string,
  club: string,
  price?:number,
  actionType?: 'ADD'|'REMOVE',
  controller?: any
}