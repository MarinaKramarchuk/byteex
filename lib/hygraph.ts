import { GalleryConnection, Review } from "@/types";

export async function getReviews() {
  const query = `
    query GetReviews {
      reviews {
        id
        name
        rating
        comment
        avatar {
          url
        }
      }
    }
  `;

  const res = await fetch(process.env.HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const { data } = await res.json();
  
  if (!data || !data.reviews) return [];

  return data.reviews.filter((r: Review) => r.name && r.comment);
}

export async function getGalleryImages() {
  const query = `
    query GetGalleryImages {
      galleryImagesConnection(first: 50) {
        edges {
          node {
            id
            image {
              url
            }
          }
        }
      }
    }
  `;

  const res = await fetch(process.env.HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  const connection: GalleryConnection = data.galleryImagesConnection;

  return connection.edges.map((edge) => ({
    url: edge.node.image.url,
  }));
}