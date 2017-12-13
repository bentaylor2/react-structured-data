import React, { PureComponent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodeSnippet from '../components/CodeSnippet';
import logo from '../rsd-logo.svg';
import CodeCard from '../components/CodeCard';
import styles from './Example.scss';
import {
  product,
  productOutput,
  aggregateRating,
  aggregateRatingOutput,
  reviews,
  reviewsOutput
} from './TextExamples';

class Example extends PureComponent {
  render() {
    return (
      <section className={styles.example}>
        <Header />
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
        </section>
      </section>
    );
  }
}



export default Example;
