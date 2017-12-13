import React from 'react';
import PropTypes from 'prop-types';

export const JSONLD = props => {
  let json = null;
  if (props.children) {
    const ChildClass = props.children.type;
    const { children, type, ...schema } = props.children.props;
    const firstChild = new ChildClass(props.children.props).getJSON(true, schema);
    json = ChildClass.name === 'JSONLDNodeCollection'
      ? Object.assign({'@context': 'http://schema.org/'}, {[type]: firstChild})
      : Object.assign({'@context': 'http://schema.org/'}, firstChild)
  }
  return (
    <script type="application/ld+json">{ JSON.stringify(json) }</script>
  );
}

JSONLD.propTypes = {
  additionalType: PropTypes.object
};

export default JSONLD;
