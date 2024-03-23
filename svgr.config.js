const cssModuleTemplate = (
    { imports, interfaces, componentName, props, jsx, exports },
    { tpl }
) => {
    return tpl`${imports}
import classNames from 'classnames/bind';
${interfaces}

function ${componentName}(${props}) {
  const cx = classNames.bind(props.styles);

  return ${jsx};
}

${exports}
  `;
};

// we need to dynamically inject cx() into classNames for certain nodes to ensure css modules work.
// an existing plugin could not be found, so a custom one was created here. we need to revisit when
// we upgrade next to utilize Turbopack.
const transformClassAttribute = ({ types: t }) => {
    function transformJsxAttribute(node) {
        if (node.type !== 'JSXAttribute') {
            return;
        }

        const isNamespaced = node.name.type === 'JSXNamespacedName';
        const attributeName = isNamespaced
            ? node.name.namespace.name + ':' + node.name.name.name
            : node.name.name;

        // Remaining transforms are for StringLiteral values, so bail now if we can
        if (node.value == null || node.value.type !== 'StringLiteral') {
            return;
        }

        if (['class', 'classname'].includes(attributeName.toLowerCase())) {
            const { type, value } = node.value;

            node.value = t.jsxExpressionContainer(
                t.templateLiteral(
                    [
                        t.templateElement({ raw: `${value} ` }, false),
                        t.templateElement({ raw: '' }, true),
                    ],
                    [
                        t.callExpression(t.identifier('cx'), [
                            t.stringLiteral(value),
                        ]),
                    ]
                )
            );
        }
    }

    return {
        visitor: {
            JSXOpeningElement: (path) => {
                if (t.react.isCompatTag(path.node.name.name)) {
                    path.node.attributes.forEach(transformJsxAttribute);
                }
            },
        },
    };
};

module.exports = {
    svgo: false,
    template: cssModuleTemplate,
    jsx: {
        babelConfig: {
            plugins: [transformClassAttribute],
        },
    },
};