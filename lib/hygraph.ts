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
  return data.reviews;
}
