import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Answer extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Answer',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({suggestedAnswer: details}, ...parseChildren);
  }
}

export default Answer;
