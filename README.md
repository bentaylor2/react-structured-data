# React Structured Data

React Structured Data provides an easy way to add declarative JSX that forms structured data for ReactJS Apps. Structured data is a standardized format for providing information about a page and classifying the page content. This library follows guidelines specified at http://schema.org/.

## Installation

### Yarn

run `yarn add react-structured-data`

### NPM

run `npm install react-structured-data --save`

### To run example Locally
In the project directory, you can run:

#### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

The following JSX:

```html
  <JSONLD>
    <Product name="Product Name">
      <AggregateRating ratingValue={4.3} reviewCount={197}/>
      <GenericCollection type="review">
        <Review name="It's awesome" reviewBody="This is Great! My family loves it" datePublished="11/22/1963">
          <Author name="Jerry"/>
          <Location name="Chicago, IL"/>
          <Rating ratingValue={5} />
        </Review>
        <Review name="Very cool" reviewBody="I like this a lot. Very cool product" datePublished="11/22/1963">
          <Author name="Cool Carl"/>
          <Location name="Chicago, IL"/>
          <Rating ratingValue={4} />
        </Review>
      </GenericCollection>
    </Product>
  </JSONLD>
```

will add the following to your markup (will be minified):

```html
<script type="application/ld+json">
  {
    "@context":"http://schema.org/",
    "@type":"Product",
    "name":"Product Name",
    "aggregateRating": {
      "@type":"AggregateRating",
      "ratingValue":4.3,
      "reviewCount":197
    },
    "review":[
      {
        "@type":"Review",
        "datePublished":"11/22/1963",
        "reviewBody":"This is Great! My family loves it",
        "name":"It's awesome",
        "author": {
          "@type":"Person",
          "name":"Jerry"
        },
        "locationCreated": {
          "@type":"AdministrativeArea",
          "name":"Chicago, IL"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },
      {
        "@type":"Review",
        "datePublished":"11/22/1963",
        "reviewBody":"I like this a lot. Very cool product",
        "name":"Very cool",
        "author":{
          "@type":"Person",
          "name":"Cool Carl"
        },
        "locationCreated": {
          "@type":"AdministrativeArea",
          "name":"Chicago, IL"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4
        }
      }
    ]
  }
</script>
```

## Reference

### Preset Components
There are several preset schema components that can be used

- AggregateRating
- Answer
- Author
- ItemReviewed
- Location
- Product
- Question
- Rating
- Review

### Structured Data and Schema.org

For more information on Structured data, visit https://developers.google.com/search/docs/guides/intro-structured-data, and also http://schema.org/.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

MIT License
