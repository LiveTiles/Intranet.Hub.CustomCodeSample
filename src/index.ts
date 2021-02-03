/*
  This is the entry point for your custom code. You are able to use TypeScript,
  structure your project however you want, write unit tests, use your dependencies
  of choice, etc.

  In the end, everything will be bundled in to a single ./dist/index.js.
  This javascript file can referenced in the hub config:
  ```
  {
    "customScript": {
      "scriptUrl": "http://localhost:8080/index.js"
    }
  }
  ```

  Usage:
  - For development (incl. watch) run    `npm run dev`
  - For production build (minified) run  `npm run build`

  We recommend exposing the functionality you need to use in expressions
  on global objects, e.g. as done below (window["myUtils"] and window["myResources"]).
*/

import { ltHubClientApi } from "@livetiles/livetiles-intranet-hub";
import { MyCustomMenuActions } from "./components/MyCustomMenuActions";
import { MyItemTemplate } from "./components/MyItemTemplate";
import { MyWidget } from "./components/MyWidget";
import { MyUtils } from "./MyUtils";
import { MyLanguageResources } from "./i18n/MyLanguageResources";

// Expose myUtils instance and use in expressions as follows:
// window.myUtils.getRandomValue()
window["myUtils"] = new MyUtils();

/*
  Expose Mui string resources and use in the config as follows:

  In widget titles:
  ```
  "title": {
    "expression": "window.myResources.cool"
  }
  ```

  In PropertyMappings:
  ```
  "additionalPropertyMappings": [
    {
      "position": {
        "type": "'ConfiguredMuiString'",
        "value": "item.position || window.myResources.cool"
      },
      "sliderInfo": [
        {
          "label": "window.myResources.cool",
          "link": {
            "type": "'Link'",
            "value": {
              "url": {
                "type": "'Link'",
                "value": "'#'"
              },
              "title": "item['PersonCompany'] || window.myResources.cool"
            }
          }
        }
      ]
    }
  ]
  ```
*/

window["myResources"] = new MyLanguageResources();

ltHubClientApi.register.widget("widget_myWidget", () => MyWidget);
ltHubClientApi.register.itemTemplate(
  "itemTemplate_myItemTemplate",
  () => MyItemTemplate
);
ltHubClientApi.register.menuActions(MyCustomMenuActions);
