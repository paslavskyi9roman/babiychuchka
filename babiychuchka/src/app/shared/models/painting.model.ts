export interface Painting {
  id: string;
  title: string;
  description: string;
  available: boolean;
  imgUrl: string;
}

export interface PaintingResponse extends Painting {
  _id: any;
}
