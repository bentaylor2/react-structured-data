export const product = `
  <JSONLD>
    <Product
      name="Product Name"
      id="product-x" />
  </JSONLD>
`;

export const productOutput = `
  <script type="application/ld+json">
    {
      "@context":"https://schema.org/",
      "@type":"Product",
      "name":"Product Name",
      "id":"product-x"
    }
  </script>
`;

export const aggregateRating = `
  <JSONLD>
    <AggregateRating
      ratingValue={4.3}
      reviewCount={197}>
      <ItemReviewed>
        <Product
          name="Product Name"
          parentID="product-x" />
      </ItemReviewed>
    </AggregateRating>
  </JSONLD>
`;

export const aggregateRatingOutput = `
  <script type="application/ld+json">
    {
      "@context":"https://schema.org/",
      "@type":"AggregateRating",
      "ratingValue":4.3,
      "reviewCount":197,
      "itemReviewed": {
        "@type":"Product",
        "@id":"product-x"
      }
    }
  </script>
`;

export const reviews = `
  <JSONLD>
    <Graph>
      <Review
        name="It's awesome"
        reviewBody="This is Great! My family loves it"
        datePublished="11/22/1963">
        <Author name="Jerry"/>
        <Location name="Chicago, IL"/>
        <Rating ratingValue={5} />
        <ItemReviewed>
          <Product
            name="Product Name"
            parentID="product-x" />
        </ItemReviewed>
      </Review>
      <Review
        name="Very cool"
        reviewBody="I like this a lot. Very cool product"
        datePublished="11/22/1963">
        <Author name="Cool Carl"/>
        <Location name="Chicago, IL"/>
        <Rating ratingValue={4} />
        <ItemReviewed>
          <Product
            name="Product Name"
            parentID="product-x" />
        </ItemReviewed>
      </Review>
    </Graph>
  </JSONLD>
`;

export const reviewsOutput = `
  <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@graph": [{
        "@type": "Review",
        "name": "It's awesome",
        "reviewBody": "This is Great! My family loves it",
        "datePublished": "11/22/1963",
        "author": {
          "@type": "Person",
          "name": "Jerry"
        },
        "locationCreated": {
          "@type": "AdministrativeArea",
          "name": "Chicago, IL"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        },
        "itemReviewed": {
          "@type": "Product",
          "@id": "product-x"
        }
      }, {
        "@type": "Review",
        "name": "Very cool",
        "reviewBody": "I like this a lot. Very cool product",
        "datePublished": "11/22/1963",
        "author": {
          "@type": "Person",
          "name": "Cool Carl"
        },
        "locationCreated": {
          "@type": "AdministrativeArea",
          "name": "Chicago, IL"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4
        },
        "itemReviewed": {
          "@type": "Product",
          "@id": "product-x"
        }
      }]
    }
  </script>
`;
