# This project shows a few fancy things you can do with CSS in react. 

## Component that can append a prop to it's list of CSS classes

### Refer to src/constants/socialLinks.js for implementation

1. We will create a component that will be used in multiple places. It take some data and map through to create a list of JSX elements. If we ever need to add or remove items from this component, we only have to update it in one place. 

2. The component will have a default CSS class. If we pass in a prop, that prop will be added to it's class list. This is useful because we can show the same data for this component (in the navbar & footer for example) but also style it differently whenever we want. 

## Component that can evaluate a boolean expression in it's CSS class list

### Refer to src/AccordionThing.js for implementation

1. We will create a component that creates a list of JSX elements. These components will have some mouse over CSS styling. 

2. We will also write some code that will select one of the list elements & apply some CSS styling by evaluating some boolean expression directly in the CSS class list. 

3. This is good for accordion types of UI elements