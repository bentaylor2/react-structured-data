import React from 'react';
import PropTypes from 'prop-types';

class JSONLDAbstractNode extends React.PureComponent {

  static propTypes = {
    schema: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.string,
    jsonldtype: PropTypes.string
  };

  getChildJSON(child, isCollection) {
    const ChildClass = child.type;
    let { type, id, parentID, ...schema } = child.props;
    if (!!parentID) schema = {'@id': parentID };
    if (!!id) schema = {
      ...schema,
      "@id": id
    };
    const newChildren = new ChildClass(child.props).getJSON((!!type || isCollection), schema);
    return !!type ? Object.assign({[type]: newChildren}) : newChildren;
  }
  parseChildren(isCollection = false) {
    if (!this.props.children) return {};
    /*
     * If a component has a single child, this.props.children is a Child object.
     * If a component has multiple children, this.props.children is an array of Child objects.
     */
    if (this.props.children.length > 0) {
      return this.props.children.map(child => {
      	if(!child) return {};
      	
      	return this.getChildJSON(child, isCollection);
      });
    }
    return [this.getChildJSON(this.props.children, isCollection)];
  }
  render() {
    return null;
  }
}

export default JSONLDAbstractNode;
