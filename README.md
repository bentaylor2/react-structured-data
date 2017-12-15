# React Structured Data

React Structured Data provides an easy way to add structured data to your React apps. Structured data is a standardized format for providing information about a page and classifying the page content. This library follows guidelines specified at http://schema.org/.

## Installation

### Yarn

`yarn add react-structured-data`

### NPM

`npm install react-structured-data --save`

## Code Example

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

If you would like to use a component that is not listed, simply use the Generic component and add the prop jsonldtype.
Generic and GenericCollection allow you to add your own structured data type.

For example, If Review preset didn't exist, you could write:

```html
<JSONLD>
  <Generic id="review" jsonldtype="Review" schema={{name: "It is awesome", reviewBody: "This is great!"}}>
    <Generic id="itemReviewed" jsonldtype="Product" schema={{"@id":"product-x"}} />
    <Generic id="author" jsonldtype="Person" schema={{name: "Cool Carl"}}/>
    <Generic id="locationCreated" jsonldtype="AdministrativeArea" schema={{name: "Chicago, IL"}}/>
  </Generic>
</JSONLD>
```

This may seem not as ideal as using the presets, but this allows completely customizable structured data.
There will also be more preset components to come in future releases to make implementation easier so stay tuned!

### Structured Data and Schema.org

For more information on Structured data, visit https://developers.google.com/search/docs/guides/intro-structured-data, and also http://schema.org/.

## Contributors

TBA

## License

MIT License
