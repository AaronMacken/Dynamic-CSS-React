# This project shows a few fancy things you can do with CSS in react. 

## Component that can append a prop to it's list of CSS classes

1. We will create a component that will be used in multiple places. It take some data and map through to create a list of JSX elements. This data will be stored in an assets file. If we ever need to add or remove items from this component, we only have to remove it from the assets file. 

2. The component will have a default CSS class. If we pass in a prop, that prop will be added to it's class list. This is useful because we'd need the same data for this component (in the navbar & footer for example) but also need it styled differently. 

## Component that can evaluate a boolean expression in it's CSS class list

1. We will create a component that creates a list of JSX elements. These components will have some mouse over CSS styling. 

2. We will also write some code that will select one of the list elements & apply some CSS styling by evaluating some boolean expression directly in the CSS class list. 

3. This is good for accordion types of UI elements