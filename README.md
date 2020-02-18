## Available Scripts

Search field with predictive dropdown.
````
npm i @alphasquad/predictive-search

OR

yarn add @alphasquad/predictive-search
````

### Demo

![](https://alpha-squad-docs.s3.amazonaws.com/images/predictivesearch.gif)

### How to use?

````
import Horizontal from "@alphasquad/predictive-search";

<PredictiveSearch
    keyword={text} // keyword that is being taken in getKeyword
    getKeyword={getKeyword} // for getting the value of input field
    results={results} // Array of string.
    placeholder="Search..."
    wrapperClass="wrapperClass"
/>

````

#### Props

| Props |  Types | Description | Required | Default |
|-------|--------|-------------|----------|---------|
|  keyword | string  | The keyword that is entered by the user in input field  |  true | -  |
|  getKeyword | Method | The method to get text from input field. | true | false |
|  wrapperClass | string  | class will be applied on the wrapping div  | false  | - |
|  results | array of string  | This should be an array of string. These results will be displayed below input section.  | true  | - |
| placeholder | string  | Placeholder text in input field  | false | - |

