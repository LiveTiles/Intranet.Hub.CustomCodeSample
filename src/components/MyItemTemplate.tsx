import * as React from "react";

export class MyItemTemplate extends React.Component<any, any> {
  public render() {
    return <div>{this.props.item.title}</div>;
  }
}
