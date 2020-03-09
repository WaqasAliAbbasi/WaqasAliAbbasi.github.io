// Reference: https://github.com/mustaphaturhan/chakra-ui-markdown-renderer

import React from "react";
import {
  Text,
  Code,
  Divider,
  Link,
  List,
  ListItem,
  Heading,
  Image
} from "@chakra-ui/core";
import { MDXProviderComponentsProp } from "@mdx-js/react";

export const ChakraUIMDXProvider = (): MDXProviderComponentsProp => {
  return {
    p: props => <Text mb={2} {...props} />,
    h1: props => <Heading my={4} as={`h1`} size="2xl" {...props} />,
    h2: props => <Heading my={4} as={`h2`} size="xl" {...props} />,
    h3: props => <Heading my={4} as={`h3`} size="l" {...props} />,
    h4: props => <Heading my={4} as={`h4`} size="md" {...props} />,
    h5: props => <Heading my={4} as={`h5`} size="sm" {...props} />,
    h6: props => <Heading my={4} as={`h6`} size="xs" {...props} />,
    thematicBreak: Divider,
    blockquote: props => <Code p={2} {...props} />,
    pre: props => <Text as="pre" {...props} />,
    em: props => <Text as="em" {...props} />,
    strong: props => <Text as="strong" {...props} />,
    delete: props => <Text as="del" {...props} />,
    inlineCode: Code,
    a: Link,
    code: props => {
      const { language, value } = props;
      return (
        <pre>
          <Code p={2} className={language && `language-${language}`}>
            {value}
          </Code>
        </pre>
      );
    },
    ul: props => <List pl={4} styleType="disc" {...props} />,
    ol: props => <List pl={4} as="ol" styleType="decimal" {...props} />,
    li: ListItem,
    img: Image
  };
};

export default ChakraUIMDXProvider;
