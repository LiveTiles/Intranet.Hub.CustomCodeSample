import {
  IWebPartConfig,
  IWebPartProps,
  ltHubClientApi
} from "@livetiles/livetiles-intranet-hub";
import * as React from "react";

export interface MyWidgetConfig extends IWebPartConfig {
  valueFromConfig: string;
}

export interface IMyWidgetState {
  showValue: boolean;
}

export class MyWidget extends React.Component<
  IWebPartProps<MyWidgetConfig>,
  IMyWidgetState
> {
  public readonly state: IMyWidgetState = {
    showValue: false
  };

  public render(): React.ReactNode {
    const greetingText = ltHubClientApi.util.translate({
      en: "hi",
      de: "sali"
    });

    return (
      <div style={{ padding: "10px 0" }}>
        <h2>{greetingText}</h2>
        <button
          type="button"
          onClick={() => this.setState({ showValue: !this.state.showValue })}
        >
          Show value from config
        </button>
        <div style={{ padding: "10px" }}>
          {this.state.showValue && (
            <span>
              Config says "<b>{this.props.webPartConfig.valueFromConfig}</b>"
            </span>
          )}
        </div>
      </div>
    );
  }
}
