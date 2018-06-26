import React, { Component } from 'react'
import './Beach.css';
import leftLeaf from '../../../assets/img/leftLeaf.svg'
import leftLeafDown from '../../../assets/img/leftLeafDown.svg'
import rightLeaf from '../../../assets/img/rightLeaf.svg'
import sand from '../../../assets/img/sand.svg'
import leftUmbrella from '../../../assets/img/leftUmbrella.svg'
import middleUmbrella from '../../../assets/img/middleUmbrella.svg'
import rightUmbrella from '../../../assets/img/leftUmbrella_2.svg'


//TODO: Split every part and add as seperate

export default class componentName extends Component {
    constructor(props){
        super(props);


        this.state = {
            showLeaf: false,
            isMiddleUmbrellaAnimating: true,
            isLeftUmbrellaAnimating: true,
            isRightUmbrellaAnimating: true,
            isLeftLeafAnimating: true
        }

    }

    render() {
        let middleUmbrellaClass = this.state.isMiddleUmbrellaAnimating;
        let rightUmbrellaClass = this.state.isRightUmbrellaAnimating;
        let leftUmbrellaClass = this.state.isLeftUmbrellaAnimating;
        let leftLeafClass = this.state.isLeftLeafAnimating;
    return (
<div className="beach">
    <div className="leftLeafDown animated bounceInLeft"><img src={leftLeafDown} className="leftLeafDownImg"/></div>
    <div className={leftLeafClass ? 'leftLeaf animated bounceInLeft' : 'leftLeaf'} onClick={() => this.setState({isLeftLeafAnimating: true})} onAnimationEnd={() => this.setState({isLeftLeafAnimating: false})}>
        <img src={leftLeaf} className="leftLeafImg"/>
    </div>

    <div className="rightLeaf animated bounceInRight"><img src={rightLeaf} className="rightLeafImg"/></div>
    <div className="sand"><img src={sand} className="sandImg"/></div>
    
    <div className={leftUmbrellaClass ? 'leftUmbrella animated bounceInDown' : 'leftUmbrella'}
      onClick={() => this.setState({isLeftUmbrellaAnimating: true})}
      onAnimationEnd={() => this.setState({isLeftUmbrellaAnimating: false})}>
        <img src={leftUmbrella} className="leftUmbrellaImg"/>
    </div>

    <div className={middleUmbrellaClass ? 'middleUmbrella animated bounceInDown' : 'middleUmbrella'} 
      onClick={() => this.setState({isMiddleUmbrellaAnimating: true})} 
      onAnimationEnd={() => this.setState({isMiddleUmbrellaAnimating: false})}>
        <img src={middleUmbrella} className="middleUmbrellaImg" />
    </div>

    <div className={rightUmbrellaClass ? 'rightUmbrella animated bounceInDown' : 'rightUmbrella'}
      onClick={() => this.setState({isRightUmbrellaAnimating: true})}
      onAnimationEnd={() => this.setState({isRightUmbrellaAnimating: false})}>
        <img src={rightUmbrella} className="rightUmbrellaImg"/>
    </div>
</div>
    )
  }
}
