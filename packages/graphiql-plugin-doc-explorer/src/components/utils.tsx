'use no memo';

import {
  GraphQLNamedType,
  GraphQLType,
  isListType,
  isNonNullType,
} from 'graphql';
import type { JSX } from 'react';

export function renderType(
  type: GraphQLType,
  renderNamedType: (namedType: GraphQLNamedType) => JSX.Element,
): JSX.Element {
  if (isNonNullType(type)) {
    return <>{renderType(type.ofType, renderNamedType)}!</>;
  }
  if (isListType(type)) {
    return <>[{renderType(type.ofType, renderNamedType)}]</>;
  }
  return renderNamedType(type);
}
