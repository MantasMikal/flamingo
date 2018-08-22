import React, { Component } from 'react'
import './Beach.css';
import leftLeaf from '../../../assets/img/leftLeaf.svg'
import leftLeafDown from '../../../assets/img/leftLeafDown.svg'
import rightLeaf from '../../../assets/img/rightLeaf.svg'
import sand from '../../../assets/img/sand.svg'
import leftUmbrella from '../../../assets/img/leftUmbrella.svg'
import middleUmbrella from '../../../assets/img/middleUmbrella.svg'
import rightUmbrella from '../../../assets/img/leftUmbrella_2.svg'
import chair from '../../../assets/img/chair.svg'

//TODO: Split every part and add as seperate

export default class componentName extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMiddleUmbrellaAnimating: true,
            isLeftUmbrellaAnimating: true,
            isRightUmbrellaAnimating: true,
            isLeftLeafAnimating: true,
            isChairAnimating: true
        }

    }

    render() {
        let middleUmbrellaClass = this.state.isMiddleUmbrellaAnimating;
        let rightUmbrellaClass = this.state.isRightUmbrellaAnimating;
        let leftUmbrellaClass = this.state.isLeftUmbrellaAnimating;
        //let leftLeafClass = this.state.isLeftLeafAnimating;
        let charClass = this.state.isChairAnimating;

    return (
<div className="beach">
    <div className="leftLeafDown animated bounceInLeft"><img src={leftLeafDown} className="leftLeafDownImg" alt="Leaf"/></div>
    <div className='leftLeaf animated bounceInLeft'><img src={leftLeaf} className="leftLeafImg" alt="Leaf"/></div>
    <div className="rightLeaf animated bounceInRight"><img src={rightLeaf} className="rightLeafImg" alt="Leaf"/></div>
    
    
    <div className={leftUmbrellaClass ? 'leftUmbrella animated bounceInDownUmbrella' : 'leftUmbrella'}
      onClick={() => this.setState({isLeftUmbrellaAnimating: true})}
      onAnimationEnd={() => this.setState({isLeftUmbrellaAnimating: false})}>
        <img src={leftUmbrella} className="leftUmbrellaImg" alt="Umbrella"/>
    </div>

    <div className={middleUmbrellaClass ? 'middleUmbrella animated bounceInDownUmbrella' : 'middleUmbrella'} 
      onClick={() => this.setState({isMiddleUmbrellaAnimating: true})} 
      onAnimationEnd={() => this.setState({isMiddleUmbrellaAnimating: false})}>
        <img src={middleUmbrella} className="middleUmbrellaImg" alt="Umbrella" />
    </div>

    <div className={rightUmbrellaClass ? 'rightUmbrella animated bounceInDownUmbrella' : 'rightUmbrella'}
      onClick={() => this.setState({isRightUmbrellaAnimating: true})}
      onAnimationEnd={() => this.setState({isRightUmbrellaAnimating: false})}>
        <img src={rightUmbrella} className="rightUmbrellaImg" alt="Umbrella"/>
    </div>
    
    <div className={charClass ? 'chair animated rubberBand' : 'chair' }
      onClick={() => this.setState({isChairAnimating: true})}
      onAnimationEnd={() => this.setState({isChairAnimating: false})}>
        <img src={chair} className="chairImg" alt="Chair"/>
    </div>


    <div className="sand"><img src={sand} className="sandImg" alt="Sand"/></div>
</div>
    )
  }
}
