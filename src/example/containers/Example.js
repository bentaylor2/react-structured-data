import React, { PureComponent } from 'react';
import styles from './Example.scss';
import {
  JSONLD,
  Graph,
  Product,
  ItemReviewed,
  Review,
  Author,
  Location,
  Rating,
  Generic
} from 'react-structured-data';


class Example extends PureComponent {
  render() {
    return (
      <section className={styles.example}>
        <header className={styles.header}>
          <h2>React Structured Data</h2>
        </header>
        <p>
          Each JSONLD component added creates a script tag with structured data on the page
        </p>
        <p className={styles.exampleIntro}>
        Below is generated JSON-LD
        </p>
        <section className={styles.exampleCode}>
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
          <JSONLD>
            <Generic type="review" jsonldtype="Review" schema={{name: "It is awesome", reviewBody: "This is great!"}}>
              <Generic type="itemReviewed" jsonldtype="Product" schema={{"@id":"product-x"}} />
              <Generic type="author" jsonldtype="Person" schema={{name: "Cool Carl"}}/>
              <Generic type="locationCreated" jsonldtype="AdministrativeArea" schema={{name: "Chicago, IL"}}/>
            </Generic>
          </JSONLD>
        </section>
      </section>
    );
  }
}



export default Example;
