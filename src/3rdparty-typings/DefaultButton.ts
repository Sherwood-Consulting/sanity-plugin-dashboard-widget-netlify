declare module 'part:@sanity/components/buttons/anchor' {
  let x: any
  export default x
}

declare module 'part:@sanity/components/buttons/default' {
  import * as React from 'react'
  interface Props {
    children?: any
    inverted?: boolean
    kind?: 'default' | 'simple'
    onClick?: any
  }
  export default class DefaultButton extends React.Component<Props, any> {}
}
