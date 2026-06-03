export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: {
    url: string;
  };
}

export interface GalleryImage {
  id: string;
  image: {
    url: string;
  };
}

export interface GalleryConnection {
  edges: {
    node: GalleryImage;
  }[];
}