import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ additionalFeatures, additionalPrice, car }) => {
  return {
    additionalFeatures, additionalPrice, car
  }
}
// const mapStateToProps = state => {
//   return {
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//   }
// }
export default connect(mapStateToProps, {})(App);
