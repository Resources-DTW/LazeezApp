export const fetchQuery = `*[_type == 'category'] | order(_createdAt desc) {
    _id,
      title,
      mainImage {
      asset -> {
        url
      }
      },
  }`;

export const productFetchQuery = `
  *[_type == 'products'] | order(_createdAt desc) {
    _id,
      title,
      mainImage {
      asset -> {
        url
      }
      },
    bgImage {
      asset -> {
        url
      }
      },
    description,
      shortDescription,
      price
  }
  `;
