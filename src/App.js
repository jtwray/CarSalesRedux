import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

console.log("props.additionalFeatures:",props.additionalFeatures)
console.log("props.dispatch:",props.dispatch)
console.log("props:",props)



  const removeFeature = feature => {
   props.removeFeature(feature)
    // dispatch an action here to remove an item
    // props.dispatch({type:"REMOVE_FEATURE",payload:feature})
  };

  const addFeature = feature => {
    // dipsatch an action here to add an item
    // props.dispatch({type:"ADD_FEATURE",payload:feature})
   props.addFeature(feature);
   console.log(props.car.features)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const { feature } = ownProps
//   return{
//   addFeature:(feature)=>{dispatch({type: "ADD_FEATURE", feature:feature})},
//   removeFeature:(feature)=>{dispatch({type:"REMOVE_FEATURE", feature:feature})}

// }}

// const mapStateToProps = ({ additionalFeatures, additionalPrice, car }) => {
//   return {
//     additionalFeatures, additionalPrice, car
//   }
// }

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
  }
}
// const mapDispatchToProps = (dispatch,ownProps) => {
//   return {
    
//     // dispatching plain actions
//     addFeature: () => dispatch({ type: 'ADD_FEATURE' }),
//     removeFeature: (feature) => dispatch({ type: 'REMOVE_FEATURE' ,payload:feature}),
   
//   }
// }
export default connect(mapStateToProps,{addFeature,removeFeature})(App);
