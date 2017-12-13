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
    // <img src={logo} className="App-logo" alt="logo" />
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
        <div className={`${styles.exampleCodeBlock} fl w-50 pa2`}>
          <CodeSnippet language="html" codeString={ product }/>
        </div>
        <div className={`${styles.exampleCodeBlock} fl w-50 pa2`}>
          <CodeSnippet language="json" codeString={ productOutput } />
        </div>
        <div className={`${styles.exampleCodeBlock} fl w-50 pa2`}>
          <CodeSnippet language="html" codeString={ aggregateRating } />
          <CodeSnippet language="json" codeString={ aggregateRatingOutput } />
        </div>
        <div className={`${styles.exampleCodeBlock} fl w-50 pa2`}>
          <CodeSnippet language="html" codeString={ reviews } />
          <CodeSnippet language="json" codeString={ reviewsOutput } />
        </div>
        </section>
      </section>
    );
  }
}



export default Example;
