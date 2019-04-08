import React from 'react';
import { Text } from 'rebass';

type Props = {
  [propName: string]: any; // TODO: Extend type of `Text`
};

const Paragraph = (props: Props) => <Text as="p" lineHeight={1.25} {...props} width={[ .95, .9 ]}/>;

export default Paragraph;
