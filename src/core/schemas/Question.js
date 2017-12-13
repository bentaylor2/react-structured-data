import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Question extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Question',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({question: details}, ...parseChildren);
  }
}

export default Question;
